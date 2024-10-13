import { HttpStatusCode } from 'axios';
import { AnimalCRUD } from '../../../database/Services/AnimalCRUD';
import { Catchable } from '../../../library/Decorators/Catchable';
import { Checkable } from '../../../library/Decorators/Checkable';
import { MissingBody } from '../../../library/Errors/Params';
import {
  Handler,
  IHasChecks,
  ServerEvent
} from '../../../library/Interfaces/HandlerController';

@Checkable
export class GetAnimalById extends Handler<ServerEvent> implements IHasChecks {
  private declare animalId: string;

  constructor(event: ServerEvent) {
    super(event);
  }

  private checkAnimalId(): void {
    const body = this.event.req.body as { animalId: string };

    if (!body.animalId) {
      throw new MissingBody('Missing animalId', ['animalId']);
    }

    this.animalId = body.animalId;
  }

  @Catchable()
  async runChecks(): Promise<void> {
    this.checkAnimalId();

    await new Promise((resolve) => {
      resolve(void 0);
    });
  }

  @Catchable()
  async execute(): Promise<void> {
    const animal = await AnimalCRUD.getAnimalById(this.animalId);

    this.event.res.status(HttpStatusCode.Ok).send(animal);
  }
}
