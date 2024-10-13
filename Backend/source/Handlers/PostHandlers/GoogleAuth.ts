import { UserCRUD } from '../../../database/Services/UserCRUD';
import { Catchable } from '../../../library/Decorators/Catchable';
import {
  Handler,
  IHasChecks,
  ServerEvent
} from '../../../library/Interfaces/HandlerController';
import { HttpStatusCode } from 'axios';
import { LoginTicket, OAuth2Client } from 'google-auth-library';
import jwt from 'jsonwebtoken';
import { Globals } from '../../../library/Globals/Globals';
import { CookieOptions } from 'express';
import { IUser } from '../../../database/Models/User';
import { Checkable } from '../../../library/Decorators/Checkable';
import { InvalidCredentials } from '../../../library/Errors/GoogleAuth';
import { UserRoleCRUD } from '../../../database/Services/UserRoleCRUD';

@Checkable
export class GoogleAuth extends Handler<ServerEvent> implements IHasChecks {
  private client = new OAuth2Client();
  private client_id: string;
  private credential: string;
  private declare ticket: LoginTicket;

  constructor(event: ServerEvent) {
    super(event);
    this.client_id = event.req.body.client_id;
    this.credential = event.req.body.credential;
  }

  private async checkCredential(): Promise<void> {
    try {
      const ticket = await this.client.verifyIdToken({
        idToken: this.credential,
        audience: this.client_id
      });
      this.ticket = ticket;
    } catch (error) {
      throw new InvalidCredentials('Credential Error');
    }
  }

  @Catchable()
  public async runChecks(): Promise<void> {
    await this.checkCredential();
  }

  @Catchable()
  async execute(): Promise<void> {
    // Get the payload from the ticket
    const payload = this.ticket.getPayload();
    if (!payload) throw new Error('No payload');

    // Get the user ID from the payload
    const { sub: userid, email, name, picture } = payload;
    if (!userid || !email || !name || !picture)
      throw new Error('Missing required fields');

    // Check if the user already exists
    let existingUser = await UserCRUD.getUserByGoogleID(userid);
    if (!existingUser) {
      // Find the basic role so they dont have access to anything
      const basicRole = await UserRoleCRUD.findRoleByName('Basic');

      // Create User
      existingUser = await UserCRUD.createUser({
        google_id: userid,
        email,
        name,
        picture,
        role: basicRole._id
      });
    }

    // Send back the user and a cookie with the JWT
    const token = jwt.sign({ existingUser }, Globals.JWT_SECRET);
    const cookieOptions: CookieOptions = {
      httpOnly: true,
      secure: Globals.IS_PRODUCTION, // Use secure in production
      sameSite: 'strict',
      maxAge: 1000 * 60 * 60 * 24 * 90 // 90 days
    };
    this.event.res
      .status(HttpStatusCode.Ok)
      .cookie('token', token, cookieOptions)
      .json({ ...existingUser });

    return await new Promise((resolve) => resolve());
  }
}
