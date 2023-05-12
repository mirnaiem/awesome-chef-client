import { createContext } from "react";
import React from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext=createContext(null);
const auth=getAuth(app)
const AuthProvider = ({children}) => {
 const createUser=(email,password)=>{
  return createUserWithEmailAndPassword(auth,email,password)
 }
 const signIn=(email,password)=>{
  return signInWithEmailAndPassword(auth,email,password)
 }
 const user={displayName:'Naiem'}
 const authInfo={
user,
createUser,
signIn,
 }
 return (
  <AuthContext.Provider value={authInfo}>
   {children}
  </AuthContext.Provider>
 );
};

export default AuthProvider;