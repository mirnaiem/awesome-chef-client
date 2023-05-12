import { createContext } from "react";
import React from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext=createContext(null);
const auth=getAuth(app)
const AuthProvider = ({children}) => {

 const createUser=(email,password)=>{
  return createUserWithEmailAndPassword(auth,email,password)
 };

 const signIn=(email,password)=>{
  return signInWithEmailAndPassword(auth,email,password)
 };

 
 const googleSignIn=(googleProvider)=>{
  return signInWithPopup(auth, googleProvider)
 }

 const gitHubSignIn=(gitHubProvider)=>{
  return signInWithPopup(auth,gitHubProvider)
 }
 const user={displayName:'Naiem'}
 const authInfo={
user,
createUser,
signIn,
googleSignIn,
gitHubSignIn
 }
 return (
  <AuthContext.Provider value={authInfo}>
   {children}
  </AuthContext.Provider>
 );
};

export default AuthProvider;