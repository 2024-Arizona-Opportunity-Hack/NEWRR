import { BaseMethods } from './BaseMethods';
import axios from 'axios';

export class GetMethods extends BaseMethods {
  constructor(baseUrl: string) {
    super(baseUrl);
  }

  public async getHelloWorld(): Promise<string> {
    const response = await axios.get<string>(`${this.baseUrl}/helloworld`);
    return response.data;
  }
}
