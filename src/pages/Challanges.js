import React from "react";
import { AppFooter, AppHeader, AppSidebar } from "src/components";
import Challange from "src/views/challange/Challange";
import Dashboard from "src/views/dashboard/Dashboard";
import Post from "src/views/post/Post";
import Reported from "src/views/reported/Reported";

function Challanges() {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <Challange />
        </div>
        {/* <AppFooter /> */}
      </div>
    </div>
  );
}

export default Challanges;
