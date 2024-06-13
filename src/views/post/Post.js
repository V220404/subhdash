import React from "react";
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
import { AppSidebar } from "src/components";


const rangeStyle ={
  pointerEvents :'none' , 
  opacity:0.5
}

const Post = () => {
  const params = useParams();
  const random = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const [users, setUsers] = React.useState([]);
  const { user } = useAuthContext();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [deleteId, setDeleteId] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const sidebarShow = useSelector((state) => state.sidebarShow);
  const dispatch = useDispatch();

  const rangeStyle = {
    pointerEvents: 'none',
    opacity: 0.5,
  };

  async function getUsers() {
    let url = `${process.env.REACT_APP_BACKEND_URL}/posts/`;
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

  const RangeStyle = {
    pointerEvents: 'none',
    opacity: 0.5
  };

  // React.useEffect(() => {
  //   getUsers();
  // }, []);

  return (
    <>



  <div style={{ backgroundColor: "#242527", minHeight: "100vh" }}>
      <AppSidebar />
      <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: "set", sidebarShow: !sidebarShow })}
          

          style={{marginTop:'20px'}}
        >
          <CIcon icon={cilMenu} size="xxl" style={{color:'white'}}/>
        </CHeaderToggler>
      <div className="body flex-grow-1 px-3" style={{ color: "#fff" }}>

      <div style={{display:'flex' , marginTop:'40px' , marginLeft:'20px' , gap:'24px' , alignContent:'center'}}>
<div>
<h2 style={{color:'white' , fontStyle:'Lora' , fontWeight:'600'}}>For Images :</h2>
</div>
<div style={{color:'white' , marginTop:'10px' , fontStyle:'Lora' , fontWeight:'600'  }} >
    <h6 style={{fontStyle:'Lora' , fontWeight:'400' , fontSize:'20px' }}> 563/1000</h6>
</div>
  
  </div>

  <hr style={{border: '1px solid grey', margintop:'10px' , marginLeft:'15px'}}></hr>



  <div style={{display:'flex' , marginTop:'40px' , marginLeft:'20px' , gap:'75px' , alignContent:'center'}}>

<div>
   <h2 style={{color:'white'}}>Total Occupation :</h2>
</div>
<div>     
<input 
     type="range"
     min="0"
     max="100"
     value="56"
     style={RangeStyle }
   />
</div>

 </div>
 <hr style={{border: '1px solid grey', margintop:'10px' , marginLeft:'15px'}}></hr>


 <div style={{display:'flex' , gap:'340px' , marginLeft:'25px' , color:'white' , marginTop:'95' }}>
    <div style={{ marginTop:'15' }}>
<p style={{fontSize:'20px'}}>Standard Uploads : 180</p>
    </div>
    <div>
    <p style={{fontSize:'20px'}}>Standard Deletes : 49</p>
    </div>

  </div>

  <div style={{display:'flex' , gap:'290px' , marginLeft:'25px' , color:'white' , marginTop:'95' }}>
    <div style={{ marginTop:'15' }}>
<p style={{fontSize:'20px'}}>High Resolution Upload : 180 </p>
    </div>
    <div>
    <p style={{fontSize:'20px'}}>High Resolution Upload : 27</p>
    </div>

  </div>

  <hr style={{border: '1px solid grey', margintop:'10px' , marginLeft:'15px'}}></hr>

  <div style={{display:'flex' , marginTop:'40px' , marginLeft:'20px' , gap:'75px' , alignContent:'center'}}>
<div>
<h2 style={{color:'white'}}>For Videos :</h2>
</div>
<div style={{color:'white' , marginTop:'10px' }} >
    <h6> 42/1000</h6>
</div>
  
  </div>

  <hr style={{border: '1px solid grey', margintop:'10px' , marginLeft:'15px'}}></hr>



  <div style={{display:'flex' , marginTop:'40px' , marginLeft:'20px' , gap:'75px' , alignContent:'center'}}>

<div>
   <h2 style={{color:'white'}}>Total Occupation :</h2>
</div>
<div>     
<input 
     type="range"
     min="0"
     max="100"
     value="42"
     style={rangeStyle }
   />
</div>
{/* <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={rangeStyle}
      />
      <div style={{ textAlign: 'center', marginTop: '10px', color: '#ffffff' }}>{value}</div> */}

 </div>

 <hr style={{border: '1px solid grey', margintop:'10px' , marginLeft:'15px'}}></hr>


 <div style={{display:'flex' , gap:'340px' , marginLeft:'25px' , color:'white' , marginTop:'95' }}>
    <div style={{ marginTop:'15' }}>
<p style={{fontSize:'20px'}}>Standard Uploads : 28</p>
    </div>
    <div>
    <p style={{fontSize:'20px'}}>Standard Deletes : 36</p>
    </div>

  </div>



  <div style={{display:'flex' , gap:'340px' , marginLeft:'25px' , color:'white' , marginTop:'95' }}>
    <div style={{ marginTop:'15' }}>
<p style={{fontSize:'20px'}}>Standard Uploads : 54</p>
    </div>
    <div>
    <p style={{fontSize:'20px'}}>Standard Deletes : 18</p>
    </div>

  </div>

  <hr style={{border: '1px solid grey', margintop:'10px' , marginLeft:'15px'}}></hr>












      </div>
    </div>
</>
);
};

export default Post;





