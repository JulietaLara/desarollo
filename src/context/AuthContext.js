import { createContext, useState } from "react";
import { useContext } from "react";
import { createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase/config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useEffect } from "react";


const UserContext = createContext();
const AuthContext= createContext();

export const AuthContextProvider = ({children}) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

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
        <UserContext.Provider value={{createUser}} >
            {children}
        </UserContext.Provider>,
        
        <AuthContext.Provider value={{googleSignIn, logOut, user}}>
            {children}
        </AuthContext.Provider>
        
    )

}

export const UserAuth = () => {
    return useContext(UserContext)
}
export const UserAuthG=() => {
    return useContext(AuthContext)
}