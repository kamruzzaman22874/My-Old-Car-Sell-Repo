import React from 'react';
import { createContext } from "react";
import app from "../../firebase/Firebase.config";
import {getAuth ,createUserWithEmailAndPassword , signInWithEmailAndPassword , signInWithPopup} from 'firebase/auth'
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider()

    const userCreate =(email , password)=>{
        return createUserWithEmailAndPassword(auth , email , password);
    }

    const userLogin = (email , password)=>{
        return signInWithEmailAndPassword(auth , email , password)
    }

    const googleSignIn = ()=>{
       return signInWithPopup (auth , googleProvider)
    }



    const authInfo = {
        userCreate,
        userLogin,
        googleSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;