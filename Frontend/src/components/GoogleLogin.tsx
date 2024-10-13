import { useState, useEffect } from 'react';
import { googleLogout, GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { GoogleProfile } from '../interfaces/Google';
import { jwtDecode } from 'jwt-decode';
//import axios from 'axios';
import { PostMethods } from '@newrr/api';

function CustomGoogleLogin() {
    const [ user, setUser ] = useState<CredentialResponse | null>(null);
    const [ profile, setProfile ] = useState<GoogleProfile | null>(null);

    // if user logins, we need to decode the credential to get their profile
    useEffect(() => {
        if(!user?.credential || !user.clientId) return;
        try {
            console.log("About to decode")
            const {email, name, picture} = jwtDecode(user.credential) as GoogleProfile;
            console.log("Decoded... Setting profile")
            setProfile({email, name, picture, authenticated: null});
            console.log("Profile set... Sending to backend")
            sendLoginDataToBackend(user.credential, user.clientId);
            console.log("Sent to backend")
        } catch (error) {
            console.log('Error decoding credential:', error);
        }
        
    }, [user]);
   
    const sendLoginDataToBackend = async (credential: string, client_id: string) => {
        const postMethods = new PostMethods(import.meta.env.VITE_G_API_URL);
        const response = await postMethods.postGoogleAuth(credential, client_id);
       // const response = await axios.post<string>(`${import.meta.env.VITE_G_API_URL}/google-auth`, { credential, client_id }, { withCredentials: true });
        console.log(response);
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