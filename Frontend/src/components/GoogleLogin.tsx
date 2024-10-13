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

            //Update the profile state to feel faster (client side)
            console.log("Decoded... Setting profile")
            setProfile({email, name, picture, authenticated: null});


            //Send data to backend for validation and role access
            console.log("Profile set... Sending to backend")
            sendLoginDataToBackend(user.credential, user.clientId);
            console.log("Sent to backend")
        } catch (error) {
            console.log('Error decoding credential:', error);
        }
        
    }, [user]);
   
    const sendLoginDataToBackend = async (credential: string, client_id: string) => {
        //send data to backend for validation and role access
        const postMethods = new PostMethods(import.meta.env.VITE_G_API_URL);
        const { email, name, role, picture} = await postMethods.postGoogleAuth(credential, client_id);

        //server side google auth response validated + client side rendering of authentication
        setProfile({email, name, picture, authenticated: role.perm_level > 5});
    };

    // log out function to log the user out of google and set the profile array to null
    const logOut = async() => {
        googleLogout();
        const postMethods = new PostMethods(import.meta.env.VITE_G_API_URL);
        await postMethods.postLogout();
        setProfile(null);
    };
    
    return (
        <div>
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
                <div className='w-96'>
                    <GoogleLogin 
                        onSuccess={(credentialResponse) => setUser(credentialResponse)} 
                        onError={() => console.log('Login Failed')} 
                    />
                </div>
            )}
        </div>
    );
}

export default CustomGoogleLogin;