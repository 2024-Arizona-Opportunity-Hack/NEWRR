import { IBehavior } from '@newrr/api';
import { Behavior } from '../Models/Behavior';
import { DBCatchable } from 'Backend/library/Decorators/DBCatchable';

export class BehaviorCRUD {
  @DBCatchable('Failed to create behavior')
  public static async createBehavior(behavior: string): Promise<IBehavior> {
    return await Behavior.create({ name: behavior.toLowerCase() });
  }

  @DBCatchable('Failed to fetch all')
  public static async getBehaviors(): Promise<IBehavior[]> {
    return await Behavior.find();
  }

  @DBCatchable('Failed to fetch behavior')
  public static async getBehaviorById(id: string): Promise<IBehavior | null> {
    return await Behavior.findById(id);
  }

  @DBCatchable('Failed to update behavior')
  public static async findBehaviorByName(
    name: string
  ): Promise<IBehavior | null> {
    return await Behavior.findOne({ name: name.toLowerCase() });
  }
}
