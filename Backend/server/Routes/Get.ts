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
    this.router.get('/get-todo', (req, res) => {
      this.handleRequest(ValidRoutes.GetToDo, req, res, true);
    });
    this.router.get('/get-admin-users', (req, res) => {
      this.handleRequest(ValidRoutes.GetAdminUsers, req, res, true);
    });
  }
}
