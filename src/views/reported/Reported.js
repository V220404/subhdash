import React from "react";
import { CgArrowTopLeft } from "react-icons/cg";
import { RxArrowTopRight } from "react-icons/rx";
import { CgArrowBottomLeft } from "react-icons/cg";
import { RiLayoutBottom2Fill } from "react-icons/ri";
import { CgArrowBottomRight } from "react-icons/cg";
import { MdCenterFocusWeak } from "react-icons/md";


import { RiLayoutBottomLine } from "react-icons/ri";

import Frame from "src/assets/frame.png";
import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CHeaderToggler,
  CImage,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import { CChartLine } from "@coreui/react-chartjs";
import { getStyle, hexToRgba } from "@coreui/utils";
import CIcon from "@coreui/icons-react";

import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
  cilMenu,
} from "@coreui/icons";

import avatar1 from "src/assets/images/avatars/1.jpg";
import avatar2 from "src/assets/images/avatars/2.jpg";
import avatar3 from "src/assets/images/avatars/3.jpg";
import avatar4 from "src/assets/images/avatars/4.jpg";
import avatar5 from "src/assets/images/avatars/5.jpg";
import avatar6 from "src/assets/images/avatars/6.jpg";

import TickIcon from "src/assets/accept.png";
import CrossIcon from "src/assets/delete-button.png";
import TrashIcon from "src/assets/delete.png";

import WidgetsBrand from "../widgets/WidgetsBrand";
import WidgetsDropdown from "../widgets/WidgetsDropdown";
import axios from "axios";
import { useAuthContext } from "src/hooks/useAuthContext";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Reported = () => {
  const params = useParams();
  const random = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const [users, setUsers] = React.useState([]);
  const { user } = useAuthContext();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [deleteId, setDeleteId] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [value, setValue] = React.useState(50);
  const sidebarShow = useSelector((state) => state.sidebarShow);
  const dispatch = useDispatch(
  );
  async function getUsers() {
    let url = `${process.env.REACT_APP_BACKEND_URL}/posts/allreportedposts`;
    if (params.id)
      url = `${process.env.REACT_APP_BACKEND_URL}/posts/${params.id}`;
    await axios
      .get(url, {
        headers: { Authorization: `Bearer ${user?.token}` },
      })
      .then((response) => {
        console.log(response.data.data);
        setUsers(response.data.data);
      });
  }

  async function handleDelete() {
    setLoading(true);
    await axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/posts/delete`,
        {
          id: users[deleteId].post._id,
        },
        {
          headers: { Authorization: `Bearer ${user?.token}` },
        }
      )
      .then((response) => {
        console.log(response.data.data);
        alert("Post Deleted");
        setIsModalOpen(false);
        setDeleteId(null);
        setLoading(false);
        getUsers();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // React.useEffect(() => {
  //   // getUsers();
  // }, []);

  return (
    <>
   
   <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: "set", sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="xxl" style={{color:'white'}}/>
        </CHeaderToggler>
     <div style={{ display: 'flex'  , width:'3' , marginTop:'50px'}}>
  

      <div style={{marginRight:'50px',marginLeft:'50px'}} >
        <CImage src={Frame} height='350px' width='311px' radius='4px' alt="frame1" />
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' , gap: '5px' }}>
          <button style={{ marginTop: '30px',marginRight:'15px', borderRadius: '10px', background: 'linear-gradient(to right, #E58179, #DD6C87)', color: 'white', height: '40px', width: '150px' }}>Re-Upload</button>
          <button style={{ marginTop: '30px', borderRadius: '10px', background: '#2C2C2C', color: 'white', height: '40px', width: '150px' }}>Remove</button>
        </div>
      </div>

      <div >
        <div style={{ marginLeft:'25px' ,color:'white'}}>
          <h3>Position</h3>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' , marginTop:'25px',  color:'white'  }}>
          {/* First Row */}
          <div style={{ display: 'flex',  marginBottom: '20px' ,gap:'36px' , marginLeft:'5px' }}>
            <div style={{ textAlign: 'center', border: '0.5px solid grey', borderRadius: '8px', padding:'24px, 10px, 24px, 10px', marginRight: '16px' , width:' 207px'  }}>
            <CgArrowTopLeft style={{width: '25px', height: '25px' , marginTop:'15px',color:' #E58179'}} />

              <p>Top Left</p>
            </div>
            <div style={{ textAlign: 'center', border: '0.5px solid grey', borderRadius: '8px', padding: '10px', marginRight: '16px' , width:' 207px' }}>
            <RxArrowTopRight style={{width: '25px', height: '25px' , marginTop:'15px',color:' #E58179'}} />

             
              <p>Top Right</p>
            </div>
            <div style={{ textAlign: 'center', border: '0.5px solid grey', borderRadius: '8px', padding: '10px', width:' 207px' }}>
            <RiLayoutBottom2Fill style={{width: '25px', height: '25px' , marginTop:'15px',color:' #E58179'}} />
              <p>Mid-Bottom</p>
            </div>
          </div>
          {/* Second Row */}
          <div style={{ display: 'flex' , gap:'36px' , marginLeft:'5px' }}>
            <div style={{ textAlign: 'center', border: '0.5px solid grey', borderRadius: '8px', padding: '10px', marginRight: '16px', width:' 207px' }}>
            <CgArrowBottomLeft style={{width: '25px', height: '25px' , marginTop:'15px',color:' #E58179'}} />
              <p>Bottom Left </p>
            </div>
            <div style={{ textAlign: 'center', border: '0.5px solid grey', borderRadius: '8px', padding: '10px', marginRight: '16px' , width:' 207px' }}>
             <CgArrowBottomRight  style={{width: '25px', height: '25px' , marginTop:'15px',color:' #E58179'}}/>
              <p>Bottom Right</p>
            </div>
            <div style={{ textAlign: 'center', border: '0.5px solid grey', borderRadius: '8px', padding: '10px' , width:' 207px' }}>
            <MdCenterFocusWeak style={{width: '25px', height: '25px' , marginTop:'15px',color:' #E58179'}} />
              <p>Center</p>
            </div>
          </div>
        </div>

        <div style={{marginLeft:'30px' , color:'white'}}>
          <h5 style={{marginTop:'25px'}}>Size Range</h5>
          <input

    type="range"
    min="0"
    max="100"
    value={value}
    onChange={(e) => setValue(e.target.value)}
    style={{ width: '100%',color:'#E5817'}}
  />
  <p>Value: {value}</p>
        </div>
      </div>
    </div>
  </>
);
};

export default Reported;