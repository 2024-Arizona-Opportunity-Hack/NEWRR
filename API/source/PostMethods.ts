import { GoogleAuthResponse } from 'API/Types/GoogleAuth';
import { BaseMethods } from './BaseMethods';
import axios from 'axios';
import { IToDoItem } from 'API/Types/ToDo';
import { IAnimalData, IBehavior, NewAnimalData } from '../Types/Animal';

export class PostMethods extends BaseMethods {
  constructor(baseUrl: string) {
    super(baseUrl);
  }

  public async postGoogleAuth(
    credential: string,
    client_id: string
  ): Promise<GoogleAuthResponse> {
    const response = await axios.post<GoogleAuthResponse>(
      `${this.baseUrl}/google-auth`,
      { credential, client_id },
      { withCredentials: true }
    );
    return response.data;
  }

  public async postLogout(): Promise<void> {
    await axios.post(`${this.baseUrl}/logout`, {}, { withCredentials: true });
  }

  public async postTodo(todos: IToDoItem[]): Promise<void> {
    await axios.post(
      `${this.baseUrl}/todo`,
      { todos },
      { withCredentials: true }
    );
  }

  public async postAddAdminUser(email: string): Promise<void> {
    await axios.post(
      `${this.baseUrl}/add-admin-user`,
      { email },
      { withCredentials: true }
    );
  }

  public async createAnimal(options: NewAnimalData): Promise<IAnimalData> {
    const response = await axios.post<IAnimalData>(
      `${this.baseUrl}/animal`,
      options,
      { withCredentials: true }
    );
    return response.data;
  }

  public async createBehavior(behavior: string): Promise<IBehavior> {
    const response = await axios.post<IBehavior>(
      `${this.baseUrl}/behavior`,
      { name: behavior },
      { withCredentials: true }
    );
    return response.data;
  }
}
