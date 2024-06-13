import React from "react";
import { AppFooter, AppHeader, AppSidebar } from "src/components";
import Helpscreen from "src/views/help/Helpscreen"
function Help() {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
      <div className="body flex-grow-1 px-3" style={{backgroundColor:"rgba(36, 37, 39, 1)"}}>
         <Helpscreen/>
        </div>
        {/* <AppFooter /> */}
      </div>
    </div>
  );
}

export default Help;
