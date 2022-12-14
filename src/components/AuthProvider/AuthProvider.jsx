import React, { useEffect, useState } from 'react';
import { createContext } from "react";
import app from "../../firebase/Firebase.config";
import {getAuth ,createUserWithEmailAndPassword , signInWithEmailAndPassword , signInWithPopup, updateProfile, onAuthStateChanged, signOut} from 'firebase/auth'
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [logUser , setLogUser] = useState()
    const [loading , setLoading] = useState(true)
    const [user , setUser] = useState()
    const googleProvider = new GoogleAuthProvider()
    

	useEffect(() => {
		fetch(`https://old-car-sell-server.vercel.app/users/${user?.email}`)
			.then((res) => res.json())
			.then((result) => {
				if(result === []){
                    console.log(result);
				setLogUser(result);
                }
			});
	}, [user?.email]);



    const userCreate =(email , password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth , email , password);
    }

    const userLogin = (email , password)=>{
        // setLoading(true)
        return signInWithEmailAndPassword(auth , email , password)
    }

    const googleSignIn = ()=>{
        setLoading(true)
       return signInWithPopup (auth , googleProvider)
    }
    const logOut = ()=>{
        return signOut(auth)
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
        loading,
        logUser,
        user,
        logOut
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log('user observing');
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;