import React, { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function useLogin() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();
  //const dispatch = useDispatch();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/auth/login`, {
        loginType: "email",
        email: email,
        password: password,
      })
      .catch((error) => {
        alert(error.response.data.message);
        setIsLoading(false);
      });
    let json = await response?.data?.user;
    json = { ...json, token: response?.data?.token };

    if (json) {
      localStorage.setItem("user", JSON.stringify(json));
      dispatch({ type: "LOGIN", payload: json });
      //loginStore.dispatch({ type: "LOGIN", payload: json });
      setIsLoading(false);
      navigate("/users", {
        state: {
          from: "login",
        },
      });
    }
  };
  return { login, isLoading, error };
}

export default useLogin;
