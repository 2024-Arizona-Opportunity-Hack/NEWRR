import { useState, useEffect } from 'react';
import { googleLogout, GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { GoogleProfile } from '../interfaces/Google';
import { jwtDecode } from 'jwt-decode';

function CustomGoogleLogin() {
    const [ user, setUser ] = useState<CredentialResponse | null>(null);
    const [ profile, setProfile ] = useState<GoogleProfile | null>(null);

    // if user logins, we need to decode the credential to get their profile
    useEffect(() => {
        if(!user?.credential) return;
        try {
            console.log(user)
            const {email, name, picture} = jwtDecode(user.credential) as GoogleProfile;
            setProfile({email, name, picture, authenticated: null});
            sendLoginDataToBackend(email, name, picture);
        } catch (error) {
            console.log('Error decoding credential:', error);
        }
        
    }, [user]);

    const sendLoginDataToBackend = async (email: string, name: string, picture: string) => {
        console.log(email, name, picture);
    };

    // log out function to log the user out of google and set the profile array to null
    const logOut = () => {
        googleLogout();
        setProfile(null);
    };
    
    return (
        <div>
            <h2>React Google Login</h2>
            <br />
            <br />
            {profile && (
                <div>
                    <img src={profile.picture} alt="user image" />
                    <h3>User Logged in</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email Address: {profile.email}</p>
                    <p>Authenticated: {profile.authenticated === true ? 'Yes' : (profile.authenticated === false ? 'No' : 'Pending...')}</p>
                    <br />
                    <br />
                    <button onClick={logOut}>Log out</button>
                </div>
            )}
            {!profile && (
                <GoogleLogin 
                    onSuccess={(credentialResponse) => setUser(credentialResponse)} 
                    onError={() => console.log('Login Failed')} 
                />
            )}
        </div>
    );
}

export default CustomGoogleLogin;