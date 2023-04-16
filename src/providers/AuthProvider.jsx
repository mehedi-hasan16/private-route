import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from '../../firebase/firebasae.config';

export const authContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setuser] = useState(null);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userLogin = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('auth state change', currentUser);
            setuser(currentUser);
        });
        return ()=>{
            unsubscribe();
        } 
            
            
        
    },[])

    const logOut = ()=>{
        return signOut(auth)
        
    }

    const userInfo ={
        user,
        createUser,
        userLogin,
        logOut

    }
    return (
        <authContext.Provider value={userInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;