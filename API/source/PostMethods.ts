import { GoogleAuthResponse } from 'API/Types/GoogleAuth';
import { BaseMethods } from './BaseMethods';
import axios from 'axios';
import { IToDoItem } from 'API/Types/ToDo';

export class PostMethods extends BaseMethods {
  constructor(baseUrl: string) {
    super(baseUrl);
  }

  public async postGoogleAuth(credential: string, client_id: string): Promise<GoogleAuthResponse> {
    const response = await axios.post<GoogleAuthResponse>(`${this.baseUrl}/google-auth`, { credential, client_id }, { withCredentials: true });
    return response.data;
  }

  public async postLogout(): Promise<void> {
    await axios.post(`${this.baseUrl}/logout`, {}, { withCredentials: true });
  }

  public async postTodo(todos: IToDoItem[]): Promise<void> {
    await axios.post(`${this.baseUrl}/todo`, { todos }, { withCredentials: true });
  }

  public async postAddAdminUser(email: string): Promise<void> {
    await axios.post(`${this.baseUrl}/add-admin-user`, { email }, { withCredentials: true });
  }
}
