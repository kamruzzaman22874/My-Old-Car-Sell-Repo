import React, { useState } from 'react';
import { createContext } from "react";
import app from "../../firebase/Firebase.config";
import {getAuth ,createUserWithEmailAndPassword , signInWithEmailAndPassword , signInWithPopup, updateProfile} from 'firebase/auth'
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [loading , setLoading] = useState(false)
    const googleProvider = new GoogleAuthProvider()

    const userCreate =(email , password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth , email , password);
    }

    const userLogin = (email , password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth , email , password)
    }

    const googleSignIn = ()=>{
        setLoading(true)
       return signInWithPopup (auth , googleProvider)
    }
    const userProfile = (name)=>{
        return updateProfile(auth.currentUser ,{
            displayName:name,
            
        });
    }



    const authInfo = {
        userCreate,
        userLogin,
        googleSignIn,
        userProfile,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;