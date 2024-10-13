import { Types } from 'mongoose';

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

export interface IAnimal {
  _id: Types.ObjectId | string;
  name: string; // Name of the animal
  species: string; // Species of the animal, eg. "dog", "cat", "bird"
  sex: AnimalSex; // Gender of the animal
  behaviour?: string[]; // Traits of the animal, eg. "aggressive", "friendly", "playful"
  intakeDate?: number; // Unix timestamp for when the animal was brought in
  adopted?: boolean; // Whether the animal has been adopted
  images?: string[]; // URLs of images of the animal
  age?: number; // Age of the animal
  breed?: string; // Breed of the animal
  medicalInfo?: string; // Medical conditions or notes
  status?: AnimalStatus; // Current adoption status
  location?: string; // Shelter or foster home location
  notes?: string; // Free-form notes about the animal
  weight?: number; // Weight of the animal in pounds
}
