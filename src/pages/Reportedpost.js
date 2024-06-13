import React from "react";
import { AppFooter, AppHeader, AppSidebar } from "src/components";
import Dashboard from "src/views/dashboard/Dashboard";
import Post from "src/views/post/Post";
import Reported from "src/views/reported/Reported";

function Reportedpost() {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <div className="body flex-grow-1 px-3 "style={{backgroundColor:"rgba(36, 37, 39, 1)"}}>
          <Reported />
        </div>
        {/* <AppFooter /> */}
      </div>
    </div>
  );
}

export default Reportedpost;
