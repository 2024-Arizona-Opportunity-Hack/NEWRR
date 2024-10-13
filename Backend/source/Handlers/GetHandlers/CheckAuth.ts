import { HttpStatusCode } from 'axios';
import { Catchable } from '../../../library/Decorators/Catchable';
import {
  Handler,
  IHasChecks,
  ServerEvent
} from '../../../library/Interfaces/HandlerController';
import jwt from 'jsonwebtoken';
import { Globals } from '../../../library/Globals/Globals';
import { UserCRUD } from '../../../database/Services/UserCRUD';
import { Checkable } from '../../../library/Decorators/Checkable';
import {
  MissingCookies,
  MissingToken,
  MissingUser
} from '../../../library/Errors/Auth';

@Checkable
export class CheckAuth extends Handler<ServerEvent> implements IHasChecks {
  private cookies;
  private declare token: string;
  private declare user: { _id: string };

  constructor(event: ServerEvent) {
    super(event);
    this.cookies = this.event.req.cookies;
  }

  private checkCookies(): void {
    if (!this.cookies || typeof this.cookies.token !== 'string') {
      throw new MissingCookies('No valid cookies provided');
    }
    this.token = this.cookies.token;
  }

  private checkToken(): void {
    if (!this.token) {
      throw new MissingToken('Missing authentication token');
    }
  }

  private checkDecodedUser(): void {
    const decoded = jwt.verify(this.token, Globals.JWT_SECRET) as {
      existingUser: { _id: string };
    };
    if (!decoded.existingUser) {
      throw new MissingUser('User not found');
    }
    this.user = decoded.existingUser;
  }

  @Catchable()
  public async runChecks(): Promise<void> {
    this.checkCookies();
    this.checkToken();
    this.checkDecodedUser();

    await new Promise((resolve) => {
      resolve(void 0);
    });
  }

  @Catchable()
  async execute(): Promise<void> {
    const authenticatedUser = await UserCRUD.getUserByGoogleID(this.user._id);

    this.event.res.status(HttpStatusCode.Ok).json({
      authenticated: true,
      data: {
        _id: authenticatedUser._id,
        email: authenticatedUser.email,
        name: authenticatedUser.name,
        role: authenticatedUser.role,
        picture: authenticatedUser.picture
      }
    });
  }
}
