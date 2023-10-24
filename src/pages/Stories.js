import React from "react";
import { AppFooter, AppHeader, AppSidebar } from "src/components";
import Dashboard from "src/views/dashboard/Dashboard";
import Story from "src/views/story/Story";

function StoriesPage() {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <Story />
        </div>
        {/* <AppFooter /> */}
      </div>
    </div>
  );
}

export default StoriesPage;
