import React from "react";
import { CNavGroup, CNavItem, CNavTitle, CFormInput, CInputGroup, CInputGroupText } from "@coreui/react";
import { VscGraph } from "react-icons/vsc";
import { GrStorage } from "react-icons/gr";
import { FaMarker } from "react-icons/fa6";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";

const _nav = [

  {
    component: CNavItem,
    name: "Customer Insights",
    to: "/users",
    icon: <VscGraph style={{ marginLeft: 5, marginRight: 10, height: 25, width: 25 }} />,
  },
  {
    component: CNavItem,
    name: "Storage Utilization",
    to: "/posts",
    icon: <GrStorage style={{ marginLeft: 5, marginRight: 10, height: 25, width: 25 }} />,
  },
  {
    component: CNavItem,
    name: "Watermark",
    to: "/reportedposts",
    icon: <FaMarker style={{ marginLeft: 5, marginRight: 10, height: 25, width: 25 }} />,
  },
  {
    component: CNavItem,
    name: "Privacy & Security",
    to: "/privacy",
    icon: <MdOutlinePrivacyTip style={{ marginLeft: 5, marginRight: 10, height: 25, width: 25 }} />,
  },
  {
    component: CNavItem,
    name: "Help & Support",
    to: "/help",
    icon: <BiSupport style={{ marginLeft: 5, marginRight: 10, height: 25, width: 25 }} />,
  },
  {
    component: CNavItem,
    name: "App Settings",
    to: "/setting",
    icon: <IoMdSettings style={{ marginLeft: 5, marginRight: 10, height: 25, width: 25 }} />,
  },
];

export default _nav;
