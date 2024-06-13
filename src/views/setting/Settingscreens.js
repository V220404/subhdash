
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
  CHeaderToggler,
 
} from "@coreui/react";

import CIcon from "@coreui/icons-react";

import {
  
  
  cilMenu,
} from "@coreui/icons";

import axios from "axios";
import { useAuthContext } from "src/hooks/useAuthContext";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Settingscreens = () => {
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
 

 <div style={{marginLeft:'50px'}}>
  <p style={{fontSize:'Lora' , fontWeight:'400' , fontSize:'12px' , lineHeight:'23.04px' , color:'#E2E2E2'  }}>Disk Cashe Usage: 0.2 MB</p>
 </div>
    {/* Main Content Begins */}
<div style={{display:'flex' ,gap:'55%'}}>
  <div style={{marginLeft :'30px'}}>
    <p style={{fontFamily:'Lora' , fontWeight:'500' , fontSize:'22px' , lineHeight:'30.72px' , color:'#F7F7F7'}}>Upload all images in Higher Resolution</p>
  </div>


</div>


<hr style={{ border: '1px solid grey', marginTop: '10px', marginLeft: '15px' }}></hr>
     
<div style={{display:'flex' ,gap:'55%'}}>
  <div style={{marginLeft :'30px'}}>
    <p style={{fontFamily:'Lora' , fontWeight:'500' , fontSize:'22px' , lineHeight:'30.72px' , color:'#F7F7F7'}}>Upload all videos in Higher Resolution</p>
  </div>
  

</div>


<hr style={{ border: '1px solid grey', marginTop: '10px', marginLeft: '15px' }}></hr>

<div style={{display:'flex' ,gap:'55%'}}>
  <div style={{marginLeft :'30px'}}>
    <p style={{fontFamily:'Lora' , fontWeight:'500' , fontSize:'22px' , lineHeight:'30.72px' , color:'#F7F7F7'}}>Automatically clear duplicate redundant images</p>
  </div>


</div>


<hr style={{ border: '1px solid grey', marginTop: '10px', marginLeft: '15px' }}></hr>

<div style={{display:'flex' ,gap:'55%'}}>
  <div style={{marginLeft :'30px'}}>
    <p style={{fontFamily:'Lora' , fontWeight:'500' , fontSize:'22px' , lineHeight:'30.72px' , color:'#F7F7F7'}}>Clear Ram Memory Cashe</p>
  </div>
 

</div>

<hr style={{ border: '1px solid grey', marginTop: '10px', marginLeft: '15px' }}></hr>

<div style={{display:'flex' ,gap:'55%'}}>
  <div style={{marginLeft :'30px'}}>
    <p style={{fontFamily:'Lora' , fontWeight:'500' , fontSize:'22px' , lineHeight:'30.72px' , color:'#F7F7F7'}}>Clear Disk Cashe</p>
  </div>
 

</div>

<hr style={{ border: '1px solid grey', marginTop: '10px', marginLeft: '15px' }}></hr>

<div style={{display:'flex' ,gap:'55%'}}>
  <div style={{marginLeft :'30px'}}>
    <p style={{fontFamily:'Lora' , fontWeight:'500' , fontSize:'22px' , lineHeight:'30.72px' , color:'#F7F7F7'}}>Clear Local Data</p>
  </div>
 

</div>




    
  </>
);
};

export default Settingscreens;