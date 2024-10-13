import { HttpStatusCode } from 'axios';
import { AnimalCRUD } from 'Backend/database/Services/AnimalCRUD';
import { Catchable } from 'Backend/library/Decorators/Catchable';
import {
  Handler,
  ServerEvent
} from 'Backend/library/Interfaces/HandlerController';

export class GetAllAnimals extends Handler<ServerEvent> {
  constructor(event: ServerEvent) {
    super(event);
  }

  @Catchable()
  async execute(): Promise<void> {
    const animals = await AnimalCRUD.getAllAnimals();

    this.event.res.status(HttpStatusCode.Ok).send(animals);
  }
}
