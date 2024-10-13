import { BaseMethods } from './BaseMethods';
import axios, { AxiosError } from 'axios';
import { UserResponse } from '../Types/User';
import { IToDoItem } from 'API/Types/ToDo';
export class GetMethods extends BaseMethods {
  constructor(baseUrl: string) {
    super(baseUrl);
  }

  public async getHelloWorld(): Promise<string> {
    const response = await axios.get<string>(`${this.baseUrl}/helloworld`);
    return response.data;
  }

  public async getAdminUsers(): Promise<string> {
    const response = await axios.get<string>(`${this.baseUrl}/get-admin-users`, { withCredentials: true });
    return response.data;
  }

  public async getTodo(): Promise<IToDoItem[]> {
    const response = await axios.get<IToDoItem[]>(`${this.baseUrl}/get-todo`, { withCredentials: true });
    return response.data;
  }

  public async checkAuth(): Promise<UserResponse> {
    try {
      const response = await axios.get<UserResponse>(`${this.baseUrl}/check-auth`, { withCredentials: true });
      return response.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response?.status === 401 || axiosError.response?.status === 404) {
          return { authenticated: false, data: null };
        }
      }
      throw error;
    }
  }
}