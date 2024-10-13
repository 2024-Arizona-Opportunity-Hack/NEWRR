import { UserCRUD } from '../../../database/Middleware/UserCRUD';
import { Catchable } from '../../../library/Decorators/Catchable';
import {
  Handler,
  ServerEvent
} from '../../../library/Interfaces/HandlerController';
import { HttpStatusCode } from 'axios';
import { OAuth2Client } from 'google-auth-library';
import { UserRole } from '../../../database/Models/UserRole';
import jwt from 'jsonwebtoken';
import { Globals } from '../../../library/Globals/Globals';
import { CookieOptions } from 'express';

export class GoogleAuth extends Handler<ServerEvent> {
  private client = new OAuth2Client();

  constructor(event: ServerEvent) {
    super(event);
  }

  @Catchable()
  async execute(): Promise<void> {
    // Get the credential and client ID from the request body
    const { credential, client_id } = this.event.req.body as {
      credential: string;
      client_id: string;
    };

    // Verify the ID token
    const ticket = await this.client.verifyIdToken({
      idToken: credential,
      audience: client_id
    });

    // Get the payload from the ticket
    const payload = ticket.getPayload();
    if (!payload) throw new Error('No payload');

    // Get the user ID from the payload
    const { sub: userid, email, name } = payload;
    if (!userid || !email || !name) throw new Error('Missing required fields');

    // Check if the user already exists
    let existingUser = await UserCRUD.getUserByGoogleID(userid);
    if (!existingUser) {
      // Find the basic role so they dont have access to anything
      const basicRole = await UserRole.findOne({ name: 'Basic' });
      if (!basicRole) throw new Error('Basic role not found');

      // Create User
      existingUser = await UserCRUD.createUser({
        google_id: userid,
        email,
        name,
        role: basicRole._id
      });
    }

    // Send back the user and a cookie with the JWT
    const token = jwt.sign({ existingUser }, Globals.JWT_SECRET);
    const cookieOptions: CookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Use secure in production
      sameSite: 'strict',
      maxAge: 1000 * 60 * 60 * 24 * 90 // 90 days
    };
    this.event.res
      .status(HttpStatusCode.Ok)
      .cookie('token', token, cookieOptions)
      .json({ payload });

    return await new Promise((resolve) => resolve());
  }
}
