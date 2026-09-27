import { useContext } from "react";
import { useNavigate } from "react-router";
import { Auth } from "../../context/AuthContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export const useAuth= ()=>{
    const { registeredUser,loggedInUser, setLoggedInUser, } = useContext(Auth)
    

      let navigate = useNavigate();
  let { register, handleSubmit, reset,
    formState: { errors, isValid }, } = useForm();
    //login logic
  let loginFormSubmit = (data) => {
    let user = registeredUser.find((val) => {
      return val.email === data.email && val.password === data.password;
    });

    if (!user) {
      toast.error("invalid creds or user not found");
      reset();
      return;
    }

    setLoggedInUser(user);
    localStorage.setItem("loggedinUser", JSON.stringify(user));
    toast.success("User loggedin");
    reset();
    navigate("/main");
  };
      //register logic
  let registerFormSubmit = (data) => {
    let user = registeredUser.find((val) => {
      return val.email === data.email && val.password === data.password;
    });

    if (!user) {
      toast.error("invalid creds or user not found");
      reset();
      return;
    }

    setLoggedInUser(user);
    localStorage.setItem("loggedinUser", JSON.stringify(user));
    toast.success("User loggedin");
    reset();
    navigate("/main");
  };
    return {
        register, handleSubmit, reset,
    errors,loginFormSubmit,registerFormSubmit
    }
}

