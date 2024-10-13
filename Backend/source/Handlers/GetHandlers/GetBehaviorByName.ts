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
export class GetBehaviorByName
  extends Handler<ServerEvent>
  implements IHasChecks
{
  private declare behaviorName: string;

  constructor(event: ServerEvent) {
    super(event);
  }

  private checkBehaviorName(): void {
    const body = this.event.req.body as { behaviorName: string };

    if (!body.behaviorName) {
      throw new MissingBody('Missing animalId', ['behaviorName']);
    }

    this.behaviorName = body.behaviorName;
  }

  @Catchable()
  async runChecks(): Promise<void> {
    this.checkBehaviorName();

    await new Promise((resolve) => {
      resolve(void 0);
    });
  }

  @Catchable()
  async execute(): Promise<void> {
    const behavior = await BehaviorCRUD.findBehaviorByName(this.behaviorName);

    this.event.res.status(HttpStatusCode.Ok).send(behavior);
  }
}
