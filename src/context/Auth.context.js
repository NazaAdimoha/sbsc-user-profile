import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { registerUser } from "../api";
import { registerSuccessAlert } from "../utils/alert";

export const AuthContext = React.createContext(null);

const initialState = {
    token: null,
  isLoggedIn: false,
  isLoginPending: false,
  loginError: null,
};
export const ContextProvider = (props) => {
  const [state, setState] = useState(initialState);
  const navigate = useNavigate();

  // const setLoginPending = (isLoginPending) => setState({ isLoginPending });
  // const setLoginSuccess = (isLoggedIn) => setState({ isLoggedIn });
  // const setLoginError = (loginError) => setState({ loginError });
  const login = ( formData ) => {
    // setLoginPending(true);
    // setLoginSuccess(false);
    // setLoginError(null);

  };
  const register = ( formData ) => {
    // setLoginPending(true);
    // setLoginSuccess(false);
    // setLoginError(null);
    registerUser(formData)
    .then((response) => {
      // console.log("response", response);
      return response.json();
    })
    .then((data) => {
      // console.log("data", data);
      const { token, id } = data;
      // localStorage.setItem("token", token);
      // localStorage.setItem("id", id);
      registerSuccessAlert();
      setState((prev) => ({...prev, token}))
      navigate("/content");
    })
    
  };
  
  const logout = () => {
    // setLoginPending(false);
    // setLoginSuccess(false);
    // setLoginError(null);
  };
  return (
    <AuthContext.Provider
      value={{
        state,
        login,
        logout,
        register,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
