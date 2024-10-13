import {
  Controller,
  HandlerController,
  ServerEvent
} from '../../library/Interfaces/HandlerController';
import { ValidRoutes } from '../../server/ValidRoutes';
import { CreateAnimal } from '../Handlers/PostHandlers/CreateAnimal';
import { CreateBehavior } from '../Handlers/PostHandlers/CreateBehavior';
import { GoogleAuth } from '../Handlers/PostHandlers/GoogleAuth';
import { Logout } from '../Handlers/PostHandlers/Logout';

export class PostController extends Controller<ServerEvent> {
  private routeId: ValidRoutes;

  constructor(event: ServerEvent) {
    super(event);
    this.routeId = event.route;
  }

  protected resolve(): HandlerController<ServerEvent> | null {
    switch (this.routeId) {
      case ValidRoutes.GoogleAuth:
        return new GoogleAuth(this.trigger);
      case ValidRoutes.Logout:
        return new Logout(this.trigger);
      case ValidRoutes.CreateAnimal:
        return new CreateAnimal(this.trigger);
      case ValidRoutes.CreateBehavior:
        return new CreateBehavior(this.trigger);
      default:
        return null;
    }
  }
}
