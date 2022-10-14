import { createContext, useState,useContext } from "react";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged} from 'firebase/auth'
import { auth } from "../Firebase/config";

const UserContext = createContext();

export const AuthContextProvider2=({children})=>{
    
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    };



    return(
        <UserContext.Provider value={{createUser, signIn }} >
             {children}
        </UserContext.Provider>
    )
}

export const UserAuth2=() =>{
    return useContext(UserContext)
}