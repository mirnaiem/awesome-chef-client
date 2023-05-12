import { createContext, useEffect, useState } from "react";
import React from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext=createContext(null);
const auth=getAuth(app)
const AuthProvider = ({children}) => {
const [user,setUser]=useState(null)
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
 
 const logOut= ()=>{
  return signOut(auth)
 }

 useEffect(()=>{
  const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
   setUser(currentUser)
  })
  return ()=>{
   return unSubscribe()
  }
 },[])
 const authInfo={
user,
createUser,
signIn,
googleSignIn,
gitHubSignIn,
logOut
 }
 return (
  <AuthContext.Provider value={authInfo}>
   {children}
  </AuthContext.Provider>
 );
};

export default AuthProvider;