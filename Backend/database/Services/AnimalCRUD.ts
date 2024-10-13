import { IAnimalData, NewAnimalData, UpdateableAnimalKeys } from '@newrr/api';
import { Animal } from '../Models/Animal';
import { DBCatchable } from 'Backend/library/Decorators/DBCatchable';
import {
  AnimalDoesNotExist,
  NoAnimalsFound
} from 'Backend/library/Errors/Animal';

export class AnimalCRUD {
  // POST
  @DBCatchable('Failed to create animal')
  public static async createAnimal(
    newAnimalData: NewAnimalData
  ): Promise<IAnimalData> {
    const animal = await Animal.create(newAnimalData);
    return animal;
  }

  // GET
  @DBCatchable('Failed to fetch animal')
  public static async getAnimalById(id: string): Promise<IAnimalData> {
    const animal = await Animal.findById(id).populate('behaviors');
    if (!animal) {
      throw new AnimalDoesNotExist(`Animal with ID ${id} does not exist`);
    }
    return animal;
  }

  // GET
  @DBCatchable('Failed to fetch all animals')
  public static async getAllAnimals(): Promise<IAnimalData[]> {
    const animals = await Animal.find().populate('behaviors');

    if (animals.length === 0) {
      throw new NoAnimalsFound('There are no animals in the database');
    }

    return animals;
  }

  // PUT
  @DBCatchable('Failed to update animal')
  public static async updateAnimalById(
    id: string,
    updatedAnimalData: UpdateableAnimalKeys
  ): Promise<IAnimalData> {
    const animal = await Animal.findByIdAndUpdate(id, updatedAnimalData, {
      new: true
    }).populate('behaviors');

    if (!animal) {
      throw new AnimalDoesNotExist(`Animal with ID ${id} does not exist`);
    }

    return animal;
  }
}
