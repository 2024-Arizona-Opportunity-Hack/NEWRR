import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { Globals } from '../../library/Globals/Globals';

export abstract class AuthMiddleware {
  private constructor() {}

  public static authenticate(req: Request, res: Response, next: Function) {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    jwt.verify(token, Globals.JWT_SECRET, (err: any, decoded: any) => {
      if (err) {
        return res.status(401).json({ error: 'Invalid token' });
      }

      // Attach the decoded user to the request object
      (req as any).user = decoded;
      next();
    });
  }
}
