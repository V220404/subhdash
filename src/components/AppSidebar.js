import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CButton,
  CImage,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarToggler,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { AppSidebarNav } from "./AppSidebarNav";
import { logoNegative } from "src/assets/brand/logo-negative";
import { sygnet } from "src/assets/brand/sygnet";
import logo from "src/assets/logo.png";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import navigation from "../_nav";
import useLogout from "src/hooks/useLogout";

const AppSidebar = () => {
  const dispatch = useDispatch();
  const unfoldable = useSelector((state) => state.sidebarUnfoldable);
  const sidebarShow = useSelector((state) => state.sidebarShow);

  const { logout } = useLogout();
  function handleLogout() {
    console.log("logout");
    logout();
  }
  return (
    <CSidebar
      position="fixed"
      style={{ backgroundColor: 'rgba(36, 37, 39, 1)' }}
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: "set", sidebarShow: visible });
      }}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/">
        <CImage src={logo} height={45} alt="Logo" />
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <div style={{ marginTop: "auto", padding: "1rem" }}>
        <CButton color="danger" onClick={handleLogout} className="w-100">
          Logout
        </CButton>
      </div>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() =>
          dispatch({ type: "set", sidebarUnfoldable: !unfoldable })
        }
      />
    </CSidebar>
  );
};

export default React.memo(AppSidebar);
