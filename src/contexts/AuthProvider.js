import React, { createContext, useEffect, useState } from "react";
import {
   createUserWithEmailAndPassword,
   getAuth,
   GoogleAuthProvider,
   onAuthStateChanged,
   sendEmailVerification,
   signInWithEmailAndPassword,
   signInWithPopup,
   signOut,
   updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   const googleProvider = new GoogleAuthProvider();

   // create user
   const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };

   // update user profile
   const updateUser = (userInfo) => {
      setLoading(true);
      return updateProfile(auth.currentUser, userInfo);
   };

   // Email Verify
   const verifyEmail = () => {
      setLoading(true);
      return sendEmailVerification(auth.currentUser)
   }

   // sign in
   const signIn = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   };

   // google sign in
   const googleSignIn = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
   };

   // logout
   const logOut = () => {
      setLoading(true);
      return signOut(auth);
   };


   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
         console.log("currentUser:", currentUser);
         setLoading(false);
      });

      return () => unsubscribe();
   }, []);


   const authInfo = {
      createUser,
      user,
      verifyEmail,
      updateUser,
      signIn,
      googleSignIn,
      loading,
      setLoading,
      logOut,
   };

   return (
      <div>
         <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
      </div>
   );
};

export default AuthProvider;
