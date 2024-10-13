export interface GoogleUser {
    access_token: string;
}

export interface GoogleProfile {
    picture: string;
    name: string;
    email: string;
    authenticated: boolean | null;
};