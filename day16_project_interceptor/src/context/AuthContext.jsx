import { createContext } from "react";
import {useState} from "react"
export const Auth= createContext();
 
export const AuthProvider = ({children})=>{
   const [registeredUser, setRegisteredUser] = useState(
    JSON.parse(localStorage.getItem("registeredUser")) || []
  );
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("loggedinUser"))
  );

  console.log("registered users->", registeredUser);
  console.log("loggedin users->", loggedInUser);
    return <Auth.Provider value={{registeredUser, setRegisteredUser,loggedInUser,setLoggedInUser}}>{children}</Auth.Provider>
}