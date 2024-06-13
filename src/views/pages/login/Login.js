import React from "react";
import { Link } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CImage,
  CInputGroup,
  CInputGroupText,
  CRow,
  CNavbar,
  CNavbarNav,
  CNavItem,
  CNavLink,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CNavbarBrand,
  CCollapse,
  CNavbarToggler,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilLockLocked, cilUser, cilMenu } from "@coreui/icons";
import useLogin from "src/hooks/useLogin";
import logo from "src/assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import Register from "../register/Register";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { login } = useLogin();
  const [isNavCollapsed, setIsNavCollapsed] = React.useState(true);
  const Register = useSelector((state) => state.Registere);
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
    console.log("submitted");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const toggleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  return (
    <>
      {/* Navbar */}
      <CNavbar expand="lg" style={{ background: 'rgba(36, 37, 39, 1)' }}>
        <CContainer fluid>
          <CNavbarBrand href="/">
            <img src={logo} alt="Logo" width="180" height="60" />
          </CNavbarBrand>

          <CNavbarToggler
            onClick={toggleNavCollapse}
            className="navbar-toggler"
            aria-controls="navbarNav"
            aria-expanded={!isNavCollapsed}
            aria-label="Toggle navigation"
          >
            <CIcon icon={cilMenu} className="text-white" />
          </CNavbarToggler>

          <CCollapse className="navbar-collapse" visible={!isNavCollapsed}>
            <CNavbarNav className="ml-auto">
            </CNavbarNav>
          </CCollapse>
        </CContainer>
      </CNavbar>

      {/* Main Content */}
      <div className="text-white min-vh-100 d-flex flex-row align-items-center" style={{ background: 'rgba(36, 37, 39, 1)' }}>
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={8}>
              <CCardGroup>
                <CCard className="p-4" style={{ background: 'rgba(36, 37, 39, 1)', borderRadius: '0' }}>
                  <CCardBody>
                    <CForm>
                      <div className="d-flex align-items-center mb-3">
                        <h1 style={{ fontFamily: "Lora", fontWeight: "500", marginBottom: 0, color: "white" }}>Login to</h1>
                        <h1 style={{ 
                          fontFamily: "Lobster Two", 
                          fontWeight: "400", 
                          fontStyle: "italic", 
                          marginLeft: "0.5rem",
                          color: "#DD6C87"
                        }}>Shub</h1>
                      </div>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilUser} />
                        </CInputGroupText>
                        <CFormInput
                          placeholder="Email"
                          autoComplete="email"
                          value={email}
                          onChange={handleEmailChange}
                        />
                      </CInputGroup>
                      <CInputGroup className="mb-4">
                        <CInputGroupText>
                          <CIcon icon={cilLockLocked} />
                        </CInputGroupText>
                        <CFormInput
                          type="password"
                          placeholder="Password"
                          autoComplete="current-password"
                          value={password}
                          onChange={handlePasswordChange}
                        />
                      </CInputGroup>
                      <CRow>
                        <CCol xs={12} className="text-right mb-3">
                          <CButton style={{ background: 'rgba(36, 37, 39, 1)',borderColor:'rgba(36, 37, 39, 1)',color: "#DD6C87"}} className="px-0">
                            Forgot password?
                          </CButton>
                        </CCol>
                        <CCol xs={12}>
                          <CButton
                            color="primary"
                            className="px-4 enlarge-on-hover w-100"
                            onClick={handleSubmit}
                            style={{ 
                              background: 'linear-gradient(90deg, #E58179 0%, #DD6C87 100%)',
                              border: 'none',
                              borderRadius: '0'
                            }}
                          >
                            Login
                          </CButton>
                        </CCol>
                        <CCol xs={12} className="mt-3">
                          <p className="text-center" style={{color:"white"}}>Don’t have an account? <CButton color="'linear-gradient(90deg, #E58179 0%, #DD6C87 100%)" className="px-0" style={{background: 'rgba(36, 37, 39, 1)',borderColor:'rgba(36, 37, 39, 1)',color: "#DD6C87",fontFamily: "Lora", fontSize: "14px", fontWeight: "600", lineHeight: "20px", letterSpacing: "0.03em", textAlign: "left" }}  
                          onClick={() => dispatch({ type: "set", register: !Register })}>Sign up</CButton></p>
                        </CCol>
                      </CRow>
                    </CForm>
                  </CCardBody>
                </CCard>
                <CCard className="text-white py-5" style={{ width: "4%", background: 'rgba(36, 37, 39, 1)', borderRadius: '0' }}>
                  <CImage src={logo} style={{ padding: "2rem" }} />
                </CCard>
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
      </div>

      {/* Inline CSS for hover effects */}
      <style jsx="true">{`
        .navbar-toggler {
          border: none;
        }

        .nav-item:hover {
          transform: scale(1.1);
          transition: transform 0.2s ease-in-out;
        }

        .dropdown-menu {
          background-color: #000;
          border: none;
        }

        .dropdown-item {
          color: white !important;
        }

        .dropdown-item:hover {
          background-color: #333;
        }

        .enlarge-on-hover:hover {
          transform: scale(1.1);
          transition: transform 0.2s ease-in-out;
        }
      `}</style>
    </>
  );
};

export default Login;
