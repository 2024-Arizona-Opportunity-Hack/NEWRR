import { HttpStatusCode } from 'axios';
import { BaseError, ErrorResponse } from '../Interfaces/Errors';

export class NoBehaviorsSaved extends BaseError {}
export class BehaviorAlreadyExists extends BaseError {}

export class NoBehaviorsSavedRes extends ErrorResponse {
  constructor() {
    super();

    this.code = HttpStatusCode.BadRequest;
    this.title = 'No Behaviors Saved';
    this.message = {
      error: 'No behaviors saved'
    };
  }
}

export class BehaviorAlreadyExistsRes extends ErrorResponse {
  constructor() {
    super();

    this.code = HttpStatusCode.BadRequest;
    this.title = 'Behavior Already Exists';
    this.message = {
      error: 'Behavior already exists'
    };
  }
}
