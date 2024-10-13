import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { Globals } from '../../library/Globals/Globals';
import { MissingToken } from '../../library/Errors/Auth';
import { HttpStatusCode } from 'axios';

export abstract class AuthMiddleware {
  private constructor() {}

  public static authenticate(req: Request, res: Response, next: () => void) {
    if (
      req.cookies &&
      req.cookies.token &&
      typeof req.cookies.token === 'string'
    ) {
      throw new MissingToken('No token provided');
    }

    const token = req.cookies.token as string;

    if (!token) {
      return res
        .status(HttpStatusCode.Unauthorized)
        .json({ error: 'No t`  oken provided' });
    }

    jwt.verify(token, Globals.JWT_SECRET, (err: any, decoded: any) => {
      if (err) {
        return res
          .status(HttpStatusCode.Unauthorized)
          .json({ error: 'Invalid token' });
      }

      // Attach the decoded user to the request object
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      (req as any).user = decoded;
      next();
    });
  }
}
