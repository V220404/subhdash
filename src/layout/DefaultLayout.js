import React, { useEffect } from "react";
import {
  AppContent,
  AppSidebar,
  AppFooter,
  AppHeader,
} from "../components/index";
import { useAuthContext } from "src/hooks/useAuthContext";
import { useLocation, useNavigate } from "react-router-dom";

const DefaultLayout = () => {
  const { user } = useAuthContext();
  const naivgate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    console.log(user);
    if (!user && !state) {
      naivgate("/login");
    }
  }, []);
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  );
};

export default DefaultLayout;
