import { IUser } from '../Models/User';
import { User } from '../Models/User';

export class UserCRUD {
  public static async createUser(user: Omit<IUser, '_id'>): Promise<IUser> {
    const newUser = await User.create(user);
    return newUser;
  }

  public static async getUserByGoogleID(
    google_id: string
  ): Promise<IUser | null> {
    const user = await User.findOne({ google_id });
    return user;
  }
}
