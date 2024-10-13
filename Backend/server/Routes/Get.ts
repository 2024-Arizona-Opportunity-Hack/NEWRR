import { RequestRouter } from '../../library/Interfaces/RequestRouter';
import { GetController } from '../../source/Controllers/GetController';
import { ValidRoutes } from '../ValidRoutes';

export class GetRouter extends RequestRouter {
  constructor() {
    super(GetController);
  }

  initializeRoutes() {
    this.router.get('/health', (req, res) => {
      this.handleRequest(ValidRoutes.Health, req, res, false);
    });
    this.router.get('/check-auth', (req, res) => {
      this.handleRequest(ValidRoutes.CheckAuth, req, res, false);
    });
  }
}
