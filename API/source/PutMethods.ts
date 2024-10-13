import axios from "axios";
import { IAnimalData, UpdateableAnimalKeys } from "../Types/Animal";
import { BaseMethods } from "./BaseMethods";

export class PutMethods extends BaseMethods {
  constructor(baseUrl: string) {
    super(baseUrl);
  }

  public async updateAnimal(
    id: string,
    options: UpdateableAnimalKeys
  ): Promise<IAnimalData> {
    const response = await axios.put<IAnimalData>(
      `${this.baseUrl}/animal`,
      { id, ...options },
      { withCredentials: true }
    );
    return response.data;
  }
}
