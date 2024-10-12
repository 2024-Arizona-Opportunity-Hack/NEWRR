import { UserCRUD } from 'Backend/database/Middleware/UserCRUD';
import { Catchable } from '../../../library/Decorators/Catchable';
import {
  Handler,
  ServerEvent
} from '../../../library/Interfaces/HandlerController';
import { HttpStatusCode } from 'axios';
import { OAuth2Client } from 'google-auth-library';

export class GoogleAuth extends Handler<ServerEvent> {
  private client = new OAuth2Client();

  constructor(event: ServerEvent) {
    super(event);
  }

  @Catchable()
  async execute(): Promise<void> {
    // Get the credential and client ID from the request body
    const { credential, client_id } = this.event.req.body as { credential: string; client_id: string };

    // Verify the ID token
    const ticket = await this.client.verifyIdToken({
      idToken: credential,
      audience: client_id,
    });

    // Get the payload from the ticket
    const payload = ticket.getPayload();
    if (!payload) throw new Error('No payload');

    // Get the user ID from the payload
    const userid = payload['sub'];

    // Check if the user already exists
    const existingUser = await UserCRUD.getUserByGoogleID(userid);
    if (!existingUser) {
      // Create User  
      const newUser = await UserCRUD.createUser({
        google_id: userid,
        email: payload['email'],
        name: payload['name'],
      });
    }
  
    // Send the payload as a response
    this.event.res.status(HttpStatusCode.Ok).json({ payload });

    return await new Promise((resolve) => resolve());
  }
}
