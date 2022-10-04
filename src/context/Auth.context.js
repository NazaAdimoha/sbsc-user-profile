import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { registerUser, loginUser } from "../api";
import { registerSuccessAlert, loginSuccessAlert } from "../utils/alert";
import { clearLocalStorage, setId, setToken } from "../utils/localStorage";

export const AuthContext = React.createContext(null);

const initialState = {
    token: null,
    id: null,
};
export const ContextProvider = (props) => {
  const [state, setState] = useState(initialState);
  const navigate = useNavigate();

  const authLogin = (formData) => {
    loginUser(formData)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const { token } = data;
        setToken(token);
        setState((prev) => ({ ...prev, token }));

        loginSuccessAlert();
        navigate("/content");
      });
  };

  const authRegister = (formData) => {
    registerUser(formData)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const { token, id } = data;
        setToken(token);
        setId(id);
        setState((prev) => ({ ...prev, token, id }));

        registerSuccessAlert();
        navigate("/register");
      });
  };
  
  const authLogout = () => {
    clearLocalStorage()
    navigate("/");
    return
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        authLogin,
        authLogout,
        authRegister,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
