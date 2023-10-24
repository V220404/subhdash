import React from "react";
import { AppFooter, AppHeader, AppSidebar } from "src/components";
import Users from "src/views/users/User";

function UsersPage() {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <Users />
        </div>
        {/* <AppFooter /> */}
      </div>
    </div>
  );
}

export default UsersPage;
