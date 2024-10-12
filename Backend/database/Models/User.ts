import mongoose from 'mongoose';

export interface IUser {
    _id: string;
    google_id: string;
    email: string;
    name: string;
    role: mongoose.Schema.Types.ObjectId | string;
}

const schema = new mongoose.Schema<IUser>({
    google_id: { 
        type: String, 
        required: true,
        unique: true
    },
    email: { 
        type: String, 
        required: true,
        unique: true
    },
    name: { 
        type: String, 
        required: true 
    },
    role: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user_roles', 
        required: true 
    },
});

export const User = mongoose.model('users', schema);