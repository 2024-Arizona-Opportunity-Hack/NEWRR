import { DefaultRoles } from '@newrr/api';
import mongoose from 'mongoose';

export interface IUserRole {
    _id: string;
    perm_level: number;
    name: string;
}

const schema = new mongoose.Schema<IUserRole>({
    perm_level: { 
        type: Number, 
        required: true,
        unique: true
    },
    name: { 
        type: String, 
        required: true,
        unique: true,
        enum: Object.values(DefaultRoles)
    },
});

export const UserRole = mongoose.model('user_roles', schema);