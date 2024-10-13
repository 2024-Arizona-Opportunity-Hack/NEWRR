import { DBCatchable } from '../../library/Decorators/DBCatchable';
import { IUser } from '../Models/User';
import { User } from '../Models/User';

export class UserCRUD {
  @DBCatchable('Error creating user')
  public static async createUser(user: Omit<IUser, '_id'>): Promise<IUser> {
    const newUser = await User.create(user);
    const populatedUser = await newUser.populate('role');
    return populatedUser.toObject();
  }

  @DBCatchable('Error fetching user by Google ID')
  public static async getUserByGoogleID(
    google_id: string
  ): Promise<IUser | null> {
    const user = await User.findOne({ google_id }).populate('role').lean();
    return user;
  }

  @DBCatchable('Error fetching user by ID')
  public static async getUserById(id: string): Promise<IUser | null> {
    const user = await User.findById(id).populate('role').lean();
    return user;
  }
}
