import { BaseMethods } from './BaseMethods';
import axios, { AxiosResponse } from 'axios';

interface GoogleAuthResponse {
  payload: Payload;
}

interface Payload {
  name: string;
  email: string;
  role: string;
  picture: string;
}

export class PostMethods extends BaseMethods {
  constructor(baseUrl: string) {
    super(baseUrl);
  }

  public async postGoogleAuth(credential: string, client_id: string): Promise<AxiosResponse<GoogleAuthResponse>> {
    const response = await axios.post<GoogleAuthResponse>(`${this.baseUrl}/google-auth`, { credential, client_id }, { withCredentials: true });
    return response;
  }
}
