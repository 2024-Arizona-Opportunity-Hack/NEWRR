import { GoogleAuthResponse } from 'API/Types/GoogleAuth';
import { BaseMethods } from './BaseMethods';
import axios from 'axios';

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
}
