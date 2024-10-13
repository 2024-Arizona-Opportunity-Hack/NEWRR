import { Types } from 'mongoose';
import { AtLeastOne } from './Generic';

export enum AnimalSex {
  MALE = 'male',
  FEMALE = 'female',
  UNKNOWN = 'unknown',
}

export enum AnimalStatus {
  AVAILABLE = 'available',
  NOT_AVAILABLE = 'not available',
  FOSTERED = 'fostered',
}

export interface IBehavior {
  _id: Types.ObjectId | string;
  name: string; // Name of the behaviour. eg. "aggressive", "friendly", "playful"
}

export interface IBaseAnimal {
  _id: Types.ObjectId | string;
  intakeDate: number; // Unix timestamp for when the animal was brought
}

export interface IAnimalData extends IBaseAnimal {
  name: string; // Name of the animal
  species: string; // Species of the animal, eg. "dog", "cat", "bird"
  sex: AnimalSex; // Gender of the animal
  status: AnimalStatus; // Current adoption status
  images: string[]; // URLs of images of the animal
  behaviour?: IBehavior[]; // Behaviors of the animal, eg. "aggressive", "friendly", "playful"
  age?: number; // Age of the animal
  breed?: string; // Breed of the animal
  medicalInfo?: string; // Medical conditions or notes
  location?: string; // Shelter or foster home location
  notes?: string; // Free-form notes about the animal
  weight?: number; // Weight of the animal in pounds
}

// Data required to create a new animal
export type NewAnimalData = Pick<IAnimalData, 'name' | 'species' | 'sex'>;

// At least one of the keys in the object must be present when updating animal metadata
export type UpdateableAnimalKeys = AtLeastOne<
  Required<Omit<IAnimalData, keyof IBaseAnimal>>
>;
