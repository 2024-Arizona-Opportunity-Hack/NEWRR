import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application } from 'express';
import { Globals } from '../library/Globals/Globals';
import { LoggerUtils } from '../library/Utilities/LoggerUtils';
import { GetRouter } from './Routes/Get';
import { PostRouter } from './Routes/Post';
import { PutRouter } from './Routes/Put';

export class Server {
  private readonly app: Application;
  private readonly port: number | string;

  constructor() {
    this.app = express();
    this.port = Globals.PORT;

    this.configureMiddleware();
    this.configureRoutes();
    // this.configureErrorHandling();
  }

  private configureMiddleware(): void {
    this.app.use(
      cors({
        origin: [Globals.FRONTEND_URL, Globals.API_URL],
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization', 'Cookie'],
        credentials: true
      })
    );
    this.app.use(cookieParser());
    this.app.use(express.json());
  }

  private configureRoutes(): void {
    this.app.use('/api', new GetRouter().router);
    this.app.use('/api', new PostRouter().router);
    this.app.use('/api', new PutRouter().router);
  }

  public start(): void {
    this.app.listen(Number(this.port), '0.0.0.0', () => {
      LoggerUtils.info(`Server is running on port ${this.port}`);
    });
  }
}
