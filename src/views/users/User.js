
 


import React, { useState } from 'react';
import {
  CAvatar,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CHeaderToggler,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuthContext } from "src/hooks/useAuthContext";
import CIcon from "@coreui/icons-react";
import { cilMenu } from "@coreui/icons";
import { useDispatch, useSelector } from "react-redux";

// Your existing imports...

const Users = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const [users, setUsers] = React.useState([]);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [deleteId, setDeleteId] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const sidebarShow = useSelector((state) => state.sidebarShow);
  const dispatch = useDispatch();

  async function getUsers() {
    await axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/user/all`, {
        headers: { Authorization: `Bearer ${user?.token}` },
      })
      .then((response) => {
        setUsers(response.data.data);
      });
  }

  async function handleDelete() {
    setLoading(true);
    await axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/user/delete`,
        { id: users[deleteId]._id },
        { headers: { Authorization: `Bearer ${user?.token}` } }
      )
      .then(() => {
        alert("User Deleted");
        setIsModalOpen(false);
        setDeleteId(null);
        setLoading(false);
        getUsers();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Uncomment to fetch users on component mount
  // React.useEffect(() => {
  //   getUsers();
  // }, []);

  // Calculate total impressions
  const totalImpressions = users.reduce((total, user) => total + user.impressions, 0);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  
  return (
    <>
      <CHeaderToggler
        className="ps-1"
        onClick={() => dispatch({ type: "set", sidebarShow: !sidebarShow })}
        style={{ marginTop: '15px' }}
      >
        <CIcon icon={cilMenu} size="xxl" style={{ color: 'white' }} />
      </CHeaderToggler>

      {/* Top Button   (Main Content Below) */}
      <div style={{ display: 'flex', marginTop: '30px', marginLeft: '48px' }}>
        <div style={{ gap: '28px' , marginTop:'5px' }}>
          <p style={{ fontWeight: '500', fontSize: '24px', lineHeight: '30.72px', fontFamily: 'Lora', color: '#F7F7F7' }}>
            Jiya & Sourabh’s Functions :
          </p>
        </div>

      

<div className="dropdown" style={{  marginLeft: '50px' , justify:'space-between' }}>
          <button
            className="dropbtn"
            onClick={toggleDropdown}
            style={{
              backgroundColor: '#242527',
              color: 'white',
              // padding: '16px',
              fontSize: '16px',
              borderWidth:'0.8px',
              cursor: 'pointer',
              width:' 180px',
              height:' 47px',
              borderRadius:'8px',
              borderColor:"#545454"
            }}
          >
            Reception
          </button>
          {isDropdownOpen && (
            <div
              className="dropdown-content"
              style={{
                display: 'block',
                position: 'absolute',
                backgroundColor: '#242527',
                boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
                zIndex: 1,
                marginTop: '8px'
              }}
            >
              <a href="#" style={{ color: 'white', padding: '12px 16px', textDecoration: 'none', display: 'block' }}>Wedding</a>
              <a href="#" style={{ color: 'white', padding: '12px 16px', textDecoration: 'none', display: 'block' }}>Reception</a>
              <a href="#" style={{ color: 'white', padding: '12px 16px', textDecoration: 'none', display: 'block' }}>Mehendi</a>
              <a href="#" style={{ color: 'white', padding: '12px 16px', textDecoration: 'none', display: 'block' }}>Sangeet</a>


          
            </div>
         
          )}
          <div>  <RiArrowDropDownLine  style={{width:'5px' , height:'5px'}}/></div>
         
        </div>

        <div style={{ marginLeft:'400px' }}>
        <button style={{ marginBottom: '5px',marginRight:'15px', borderRadius: '10px', background: 'linear-gradient(to right, #E58179, #DD6C87)', color: 'white', height: '40px', width: '150px' }}>Export</button>
        </div>
      </div>


      <hr style={{ border: '1px solid grey', marginTop: '10px', marginLeft: '15px' }}></hr>


      <div style={{ display: 'flex', gap: '234px', marginLeft: '25px', color: 'white', marginTop: '25px' }}>
            <div style={{ marginTop: '15px' }}>
                <p style={{ fontSize: '20px' , fontWeight:'400' , lineHeight:'25.6px' , fontFamily:'Lora' }}>Total Impressions  :  36435</p>
            </div>
            <div style={{ marginTop: '15px' }}>
                <p style={{ fontSize: '20px' , fontWeight:'400' , lineHeight:'25.6px' , fontFamily:'Lora' }}>Photos Discovered  : 875/878</p>
            </div>
        </div>


        <div style={{ display: 'flex', gap: '234px', marginLeft: '25px', color: 'white', marginTop: '25px' }}>
            <div style={{ marginTop: '15px' }}>
                <p style={{ fontSize: '20px' , fontWeight:'400' , lineHeight:'25.6px' , fontFamily:'Lora' }}>Number of Downloads  : 1220</p>
            </div>
            <div style={{ marginTop: '15px' }}>
                <p style={{ fontSize: '20px' , fontWeight:'400' , lineHeight:'25.6px' , fontFamily:'Lora' }}>Registered Users  : 28</p>
            </div>
        </div>



      <hr style={{ border: '1px solid grey', marginTop: '10px', marginLeft: '15px' }}></hr>





      {/* The below buttons  End Section */}
      <CButton
        style={{ backgroundColor: 'rgba(36, 37, 39, 1)', borderRadius: '8px', borderColor: 'rgba(84, 84, 84, 1)' }}
        className="position-fixed bottom-0 start-0 m-4"
        onClick={() => { }}
      >
        <FaArrowLeft /> Previous
      </CButton>

      <CButton
        style={{ backgroundColor: 'rgba(36, 37, 39, 1)', borderRadius: '8px', borderColor: 'rgba(84, 84, 84, 1)' }}
        className="position-fixed bottom-0 end-0 border-1  m-4"
        onClick={() => { }}
      >
        Next <FaArrowRight />
      </CButton>
    </>
  );
};

export default Users;
