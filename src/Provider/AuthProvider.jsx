import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase_config";

export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const[loading ,setLoading] =useState(true)
   
   useEffect(()=>{
  const unSubScrip =  onAuthStateChanged(auth,currentUser =>{
        console.log('user in the auth sated changed',currentUser)
        setUser(currentUser)
        setLoading(false)
    });
    return ()=>{
        unSubScrip()

    }
   },[])
const createUser=(email,password) =>{
  setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}
const singIn =(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}
const logOut =()=>{
    return  signOut(auth)
}

    const authInfo = {
        user,
        createUser,
        singIn,
        logOut,
        loading
        
       
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;