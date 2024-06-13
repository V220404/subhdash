import React from "react";
import { CgArrowTopLeft } from "react-icons/cg";
import { RxArrowTopRight } from "react-icons/rx";
import { CgArrowBottomLeft } from "react-icons/cg";
import { RiLayoutBottom2Fill } from "react-icons/ri";
import { CgArrowBottomRight } from "react-icons/cg";
import { MdCenterFocusWeak } from "react-icons/md";
import ToggleSwitch from "src/components/Toggle";


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




const Privacyscreens = () => {
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

          style={{marginTop:'20px'}}
        >
          <CIcon icon={cilMenu} size="xxl" style={{color:'white'}}/>
        </CHeaderToggler>

        {/* The top section side bar menue */}

        {/* Main */}

        
        <div style={{display:'flex' , marginTop:'25px' , marginLeft:'25px' , gap:'60%'}}>
       <div style={{paddingLeft:'20px'}} >
        <p style={{fontFamily:'Lora' , fontWeight:'500' , fontSize:'24px' , lineHeight:'30.72px' , color:'#F7F7F7'}}>Anyone can change name & icon</p>
        </div>
      <div>

        <p>button</p>
      </div>
        </div>

        <hr style={{ border: '1px solid grey', marginTop: '10px', marginLeft: '15px' }}></hr>
     
    

        <div style={{display:'flex' , marginTop:'25px' , marginLeft:'25px' , gap:'60%'}}>
       <div style={{paddingLeft:'20px'}} >
        <p style={{fontFamily:'Lora' , fontWeight:'500' , fontSize:'24px' , lineHeight:'30.72px' , color:'#F7F7F7'}}>Anyone with link can join</p>
        </div>
      <div style={{marginLeft:'70px'}}>

        <p>button</p>
      </div>
        </div>

        <hr style={{ border: '1px solid grey', marginTop: '10px', marginLeft: '15px' }}></hr>



        <div style={{display:'flex' , marginTop:'20px' , marginLeft:'25px' , gap:'60%'}}>
       <div style={{paddingLeft:'20px'}} >
        <p style={{fontFamily:'Lora' , fontWeight:'500' , fontSize:'24px' , lineHeight:'30.72px' , color:'#F7F7F7'}}>Anonymous Logins</p>
        <span style={{fontSize:'15px' , fontWeight:'400' , lineHeight:'25.6px' , color:'gray' , marginBottom:'15px'}}> User can Join group and see picture
          </span>
        </div>
      <div style={{marginLeft:'70px'}}>

        <p>button</p>
      </div>
        </div>


        <hr style={{ border: '1px solid grey', marginTop: '10px', marginLeft: '15px' }}></hr>


        <div>
          <div style={{marginLeft:'45px'}}>
            <h5 style={{fontFamily:'Lora' , fontWeight:'500' , fontSize:'24px' , lineHeight:'30.72px' , color:'#F7F7F7'}}>Upload Permissions</h5>
          </div>
      
        
        </div>
        <div style={{ display: 'block' , marginLeft:'40px' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <input type="radio" id="option1" name="option" value="All participants can upload" />
        <label htmlFor="option1" style={{ marginLeft: '8px' ,fontFamily:'Lora' , fontWeight:'500' , fontSize:'20px' , lineHeight:'30.72px' , color:'#F7F7F7'  }}>All participants can upload</label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <input type="radio" id="option2" name="option" value="Only selected participants can upload" />
        <label htmlFor="option2" style={{ marginLeft: '8px' , fontFamily:'Lora' , fontWeight:'500' , fontSize:'20px' , lineHeight:'30.72px' , color:'#F7F7F7' }}>Only selected participants can upload</label>
      </div>
    </div>
  </>
);
};

export default Privacyscreens;