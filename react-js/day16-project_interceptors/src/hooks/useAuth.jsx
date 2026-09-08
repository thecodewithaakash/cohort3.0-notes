import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Auth } from "../context/AuthContext";

export const useAuth = () => {
  const { registeredUsers, loggedInUser, setLoggedInUser, setRegisteredUsers } =
    useContext(Auth);

  let navigate = useNavigate();

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm();

  //   login logic
  let loginFormSubmit = (data) => {
    let user = registeredUsers.find((val) => {
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

  //   register logic
  let registerFormSubmit = (data) => {
    let arr = [...registeredUsers, data];
    setRegisteredUsers(arr);
    alert("user registered successfully");
    setLoggedInUser(data);
    localStorage.setItem("loggedinUser", JSON.stringify(data));
    localStorage.setItem("registeredUsers", JSON.stringify(arr));
    navigate("/main");

    reset();
  };

  return {
    navigate,
    register,
    handleSubmit,
    reset,
    errors,
    loginFormSubmit,
    registerFormSubmit,
  };
};
