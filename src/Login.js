import React from 'react'
import './css/login.css'

import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { db, auth, provider } from './firebaseConfig'

import logo from './images/gmail.png'
import { useDispatch } from 'react-redux'
import { signin, signout } from './features/userSlice'

const Login = () => {
    const dispatch = useDispatch()
    const gmailLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                console.log(user);
                dispatch(signin({
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                    email: user.email,
                }))
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }
    return (
        <div className='loginwrapper'>
            <div className="login">
                <img src={logo} alt="logo" height={20} width={30} /> &nbsp;&nbsp;&nbsp;&nbsp;

                <button button className='gmail__login' onClick={gmailLogin}>Login with Gmail</button>
            </div>
        </div>
    )
}

export default Login