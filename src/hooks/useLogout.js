import React from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";
function useLogout() {
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };
  return { logout };
}

export default useLogout;
