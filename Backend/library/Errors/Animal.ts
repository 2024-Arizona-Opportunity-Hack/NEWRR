import { HttpStatusCode } from 'axios';
import { BaseError, ErrorResponse } from '../Interfaces/Errors';

export class AnimalDoesNotExist extends BaseError {}
export class NoAnimalsFound extends BaseError {}

export class AnimalDoesNotExistRes extends ErrorResponse {
  constructor() {
    super();

    this.code = HttpStatusCode.BadRequest;
    this.title = 'Animal Not Found';
    this.message = {
      error: 'Animal does not exist'
    };
  }
}

export class NoAnimalsFoundRes extends ErrorResponse {
  constructor() {
    super();

    this.code = HttpStatusCode.BadRequest;
    this.title = 'No Animals Found';
    this.message = {
      error: 'No animals found'
    };
  }
}
