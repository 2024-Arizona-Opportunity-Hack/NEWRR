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
        unique: true
    },
});

export const User = mongoose.model('user_roles', schema);