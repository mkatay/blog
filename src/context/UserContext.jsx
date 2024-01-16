import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import React, { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { auth } from "../utility/firebaseApp";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(()=>{
      onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
      })
  },[])

  const signUpUser = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("sikeres regisztráció!");
    } catch (err) {
      console.log(err);
    }
  };
  const signInUser=async (email,password)=>{
    try {
        await signInWithEmailAndPassword(auth, email, password);
        alert("sikeres belépés");
      } catch (err) {
        console.log(err);
      }
  }

  const logoutUser=async ()=>{
      await signOut()
  }


  return (
      <UserContext.Provider value={{user,signUpUser,logoutUser,signInUser}}>
          {children}
      </UserContext.Provider>
  )
};
