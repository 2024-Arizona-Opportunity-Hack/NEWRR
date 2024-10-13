import {
  Controller,
  HandlerController,
  ServerEvent
} from '../../library/Interfaces/HandlerController';
import { ValidRoutes } from '../../server/ValidRoutes';
import { CheckAuth } from '../Handlers/GetHandlers/CheckAuth';
import { GetAdminUsers } from '../Handlers/GetHandlers/GetAdminUsers';
import { GetToDo } from '../Handlers/GetHandlers/GetToDo';
import { GetHealth } from '../Handlers/GetHandlers/HelloWorld';

export class GetController extends Controller<ServerEvent> {
  private routeId: ValidRoutes;

  constructor(event: ServerEvent) {
    super(event);
    this.routeId = event.route;
  }

  protected resolve(): HandlerController<ServerEvent> | null {
    switch (this.routeId) {
      case ValidRoutes.Health:
        return new GetHealth(this.trigger);
      case ValidRoutes.CheckAuth:
        return new CheckAuth(this.trigger);
      case ValidRoutes.GetToDo:
        return new GetToDo(this.trigger);
      case ValidRoutes.GetAdminUsers:
        return new GetAdminUsers(this.trigger);
      default:
        return null;
    }
  }
}
