import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';
export const UserContext=createContext();

const auth=getAuth(app);

const AuthContext = ({children}) => {
    const [user,setUser]=useState([]);

    const userSignIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const userRegister=(email,password)=>{
       
            return createUserWithEmailAndPassword(auth,email,password);
    }

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
            
           setUser(currentUser) ;
          
           
        })
        return ()=>{
            unSubscribe();
        }
    },[])

    const updateUser=(infoUser)=>{
        return updateProfile(auth.currentUser,infoUser);

    }

    const googleLogIn=(provider)=>{
        return signInWithPopup(auth, provider)
    }
    const logOut=()=>{
        return signOut(auth);
    }

    
    const userInfo={user,userRegister,userSignIn,googleLogIn,updateUser,logOut};
    return (
        <UserContext.Provider value={userInfo}>
                {children}
        </UserContext.Provider>
    );
};

export default AuthContext;