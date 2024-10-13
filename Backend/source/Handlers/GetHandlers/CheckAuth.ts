import { HttpStatusCode } from 'axios';
import { Catchable } from '../../../library/Decorators/Catchable';
import {
  Handler,
  ServerEvent
} from '../../../library/Interfaces/HandlerController';
import jwt from 'jsonwebtoken';
import { Globals } from '../../../library/Globals/Globals';
import { UserCRUD } from '../../../database/Services/UserCRUD';

export class CheckAuth extends Handler<ServerEvent> {
  constructor(event: ServerEvent) {
    super(event);
  }

  @Catchable()
  async execute(): Promise<void> {
    //Check if the cookies are provided
    const cookies = this.event.req.cookies;
    if (!cookies) {
      this.event.res.status(HttpStatusCode.Unauthorized).json({
        authenticated: false,
        message: 'No cookies provided'
      });
      return;
    }

    //Check if the token is provided
    const token = this.event.req.cookies.token;
    if (!token) {
      this.event.res.status(HttpStatusCode.Unauthorized).json({
        authenticated: false,
        message: 'No token provided'
      });
      return;
    }

    try {
      // Verify the token
      const decoded = jwt.verify(token, Globals.JWT_SECRET) as {
        existingUser: { _id: string };
      };

      //Check if the user exists
      if (!decoded.existingUser) {
        this.event.res.status(HttpStatusCode.Unauthorized).json({
          authenticated: false,
          message: 'User not found'
        });
        return;
      }

      // Fetch the user from the database
      const existingUser = decoded.existingUser;
      const user = await UserCRUD.getUserById(existingUser._id);

      //Check if the user exists
      if (!user) {
        this.event.res.status(HttpStatusCode.NotFound).json({
          authenticated: false,
          message: 'User not found'
        });
        return;
      }

      // If everything is okay, send the user data
      this.event.res.status(HttpStatusCode.Ok).json({
        authenticated: true,
        data: {
          _id: user._id,
          email: user.email,
          name: user.name,
          role: user.role,
          picture: user.picture
        }
      });
    } catch (error) {
      // If token is invalid or expired
      this.event.res.status(HttpStatusCode.Unauthorized).json({
        authenticated: false,
        message: 'Invalid or expired token'
      });
    }
  }
}
