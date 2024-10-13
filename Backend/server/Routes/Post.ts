import { RequestRouter } from '../../library/Interfaces/RequestRouter';
import { PostController } from '../../source/Controllers/PostController';
import { ValidRoutes } from '../ValidRoutes';

export class PostRouter extends RequestRouter {
  constructor() {
    super(PostController);
  }

  initializeRoutes() {
    this.router.post('/google-auth', (req, res) => {
      this.handleRequest(ValidRoutes.GoogleAuth, req, res);
    });

    this.router.post('/webhooks/jotform/checkin', (req, res) => {
      this.handleRequest(ValidRoutes.JotformCheckin, req, res);
    });
  }
}
