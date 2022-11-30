import React, { createContext, useEffect, useState } from "react";
import {
   createUserWithEmailAndPassword,
   getAuth,
   GoogleAuthProvider,
   onAuthStateChanged,
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

   const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const signIn = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   };

   const updateUser = (userInfo) => {
      return updateProfile(auth.currentUser, userInfo);
   };

   const googleSignIn = () => {
      return signInWithPopup(auth, googleProvider);
   };

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
      signIn,
      updateUser,
      googleSignIn,
      loading,
      logOut,
   };

   return (
      <div>
         <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
      </div>
   );
};

export default AuthProvider;
