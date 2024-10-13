import { BaseMethods } from './BaseMethods';
import axios, { AxiosError } from 'axios';
import { UserResponse } from '../Types/User';
import { IAnimalData, IBehavior } from '../Types/Animal';
export class GetMethods extends BaseMethods {
  constructor(baseUrl: string) {
    super(baseUrl);
  }

  public async checkAuth(): Promise<UserResponse> {
    try {
      const response = await axios.get<UserResponse>(
        `${this.baseUrl}/check-auth`,
        { withCredentials: true }
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (
          axiosError.response?.status === 401 ||
          axiosError.response?.status === 404
        ) {
          return { authenticated: false, data: null };
        }
      }
      throw error;
    }
  }

  public async getAllAnimals(): Promise<IAnimalData[]> {
    const response = await axios.get<IAnimalData[]>(`${this.baseUrl}/animals`);
    return response.data;
  }

  public async getAnimalById(id: string): Promise<IAnimalData> {
    const response = await axios.get<IAnimalData>(`${this.baseUrl}/animal`, {
      headers: { id },
    });

    return response.data;
  }

  public async getBehaviorById(id: string): Promise<IBehavior> {
    const response = await axios.get<IBehavior>(`${this.baseUrl}/behavior/id`, {
      headers: { id },
    });

    return response.data;
  }

  public async getBehaviorByName(name: string): Promise<IBehavior> {
    const response = await axios.post<IBehavior>(
      `${this.baseUrl}/behavior/name`,
      { name }
    );

    return response.data;
  }

  public async getBehaviors(): Promise<IBehavior[]> {
    const response = await axios.get<IBehavior[]>(`${this.baseUrl}/behaviors`);
    return response.data;
  }
}
