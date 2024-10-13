interface Role {
    perm_level: number;
    name: string;
}

export interface GoogleAuthResponse {
    name: string;
    email: string;
    role: string;
    picture: string;
}