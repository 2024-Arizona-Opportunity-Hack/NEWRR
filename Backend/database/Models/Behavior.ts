import { IBehavior } from '@newrr/api';
import mongoose from 'mongoose';

const schema = new mongoose.Schema<IBehavior>({
  name: {
    type: String,
    required: true,
    unique: true
  }
});

export const Behavior = mongoose.model<IBehavior>('behaviors', schema);
