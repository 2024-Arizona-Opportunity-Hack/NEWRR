import { PostMethods } from '@newrr/api';
import { Catchable } from '../../../library/Decorators/Catchable';
import {
  Handler,
  ServerEvent
} from '../../../library/Interfaces/HandlerController';
import { JotformParser } from '../../../source/Middleware/JotformParser';
import { Globals } from '../../../library/Globals/Globals';
import { HttpStatusCode } from 'axios';

export class Jotform extends Handler<ServerEvent> {
  constructor(event: ServerEvent) {
    super(event);
  }

  @Catchable()
  async execute(): Promise<void> {
    const animalData = JotformParser.parse(
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      this.event.req.body['rawRequest'] as string
    );

    const postMethods = new PostMethods(Globals.API_URL);

    await postMethods.createAnimal({
      name: animalData.name,
      species: animalData.species,
      sex: animalData.sex,
      images: animalData.images
    });

    this.event.res
      .status(HttpStatusCode.Created)
      .json({ message: 'Animal created', data: animalData });
  }
}
