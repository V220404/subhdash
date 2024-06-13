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

const Helpscreen= () => {
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
     
    
  </>
);
};

export default Helpscreen;