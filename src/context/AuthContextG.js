import { createContext, useState } from "react";
import { useContext } from "react";
import { createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase/config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useEffect } from "react";



const AuthContext= createContext();

export const AuthContextProvider = ({children}) => {


    const [user, setUser] = useState({})

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider(); 
        signInWithPopup(auth, provider)
    }


    const logOut = () => {
        signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log('User', currentUser)
        }); 
        return () => {
            unsubscribe();  
        }
    },[])

    return(
        
        <AuthContext.Provider value={{googleSignIn, logOut, user}}>
            {children}
        </AuthContext.Provider>
        
    )

}

export const UserAuthG=() => {
    return useContext(AuthContext)
}