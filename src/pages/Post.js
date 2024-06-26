import React from "react";
import { AppFooter, AppHeader, AppSidebar } from "src/components";
import Dashboard from "src/views/dashboard/Dashboard";
import Post from "src/views/post/Post";

function PostsPage() {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
      <div  style={{backgroundColor:"rgba(36, 37, 39, 1) ," , height:'100%'}}>
          <Post />
        </div>
        {/* <AppFooter /> */}
      </div>
    </div>
  );
}

export default PostsPage;
