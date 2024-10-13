import dotenv from 'dotenv';

export class Globals {
  public static ENV = process.env.NODE_ENV || 'development';

  private constructor() {}

  static {
    Globals.initialize();
  }

  private static initialize() {
    dotenv.config({ path: `.env.${Globals.ENV}` });
  }
  // CONSTANTS

  // PRIVATE CONSTANTS | VARIABLES
  public static readonly DB_NAME = process.env.DB_NAME || '';
  public static readonly MONGO_URI = process.env.MONGODB_URI || '';
  public static readonly PORT = process.env.PORT || 3000;
  public static readonly API_URL = process.env.API_URL || '';
  public static readonly FRONTEND_URL = process.env.FRONTEND_URL || '';
  public static readonly JWT_SECRET = process.env.JWT_SECRET || '';
  public static readonly IS_PRODUCTION = Boolean(process.env.IS_PRODUCTION) || false;
  // VARIABLE ACCESSORS BASED ON ENVIRONMENT
}
