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

    this.router.get('/animal', (req, res) => {
      this.handleRequest(ValidRoutes.GetAnimalById, req, res, false);
    });

    this.router.get('/animals', (req, res) => {
      this.handleRequest(ValidRoutes.GetAllAnimals, req, res, false);
    });

    this.router.get('/behavior/id', (req, res) => {
      this.handleRequest(ValidRoutes.GetBehaviorById, req, res, false);
    });

    this.router.get('/behavior/name', (req, res) => {
      this.handleRequest(ValidRoutes.GetBehaviorByName, req, res, false);
    });

    this.router.get('/behaviors', (req, res) => {
      this.handleRequest(ValidRoutes.GetBehaviors, req, res, false);
    });
  }
}
