import { HttpStatusCode } from 'axios';
import { BehaviorCRUD } from '../../../database/Services/BehaviorCRUD';
import { Catchable } from '../../../library/Decorators/Catchable';
import { Checkable } from '../../../library/Decorators/Checkable';
import { MissingBody } from '../../../library/Errors/Params';
import {
  Handler,
  IHasChecks,
  ServerEvent
} from '../../../library/Interfaces/HandlerController';

@Checkable
export class GetBehaviorById
  extends Handler<ServerEvent>
  implements IHasChecks
{
  private declare behaviorId: string;

  constructor(event: ServerEvent) {
    super(event);
  }

  private checkBehaviorId(): void {
    const body = this.event.req.body as { behaviorId: string };

    if (!body.behaviorId) {
      throw new MissingBody('Missing animalId', ['behaviorId']);
    }

    this.behaviorId = body.behaviorId;
  }

  @Catchable()
  async runChecks(): Promise<void> {
    this.checkBehaviorId();

    await new Promise((resolve) => {
      resolve(void 0);
    });
  }

  @Catchable()
  async execute(): Promise<void> {
    const behavior = await BehaviorCRUD.getBehaviorById(this.behaviorId);

    this.event.res.status(HttpStatusCode.Ok).send(behavior);
  }
}
