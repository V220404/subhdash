import React, { Component, Suspense } from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import "./scss/style.scss";
import DashboardPage from "./pages/Dashboard";
import { useAuthContext } from "./hooks/useAuthContext";
import StoriesPage from "./pages/Stories";
import PostsPage from "./pages/Post";
import MusicPage from "./pages/Music";
import UsersPage from "./pages/Users";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));

// Pages
const Login = React.lazy(() => import("./views/pages/login/Login"));
const Register = React.lazy(() => import("./views/pages/register/Register"));
const Page404 = React.lazy(() => import("./views/pages/page404/Page404"));
const Page500 = React.lazy(() => import("./views/pages/page500/Page500"));

function App() {
  const { user } = useAuthContext();

  return (
    <BrowserRouter>
      <Suspense fallback={loading}>
        <Routes>
          <Route exact path="/login" name="Login Page" element={<Login />} />
          <Route
            path="/"
            name="Default"
            element={user ? <DefaultLayout /> : <Login />}
          />
          <Route
            exact
            path="/dashboard"
            name="Dashboard"
            element={user ? <DashboardPage /> : <Login />}
          />
          <Route
            path="/users"
            name="Users"
            element={user ? <UsersPage /> : <Login />}
          />
          <Route
            path="/posts"
            name="Posts"
            element={user ? <PostsPage /> : <Login />}
          />
          <Route
            path="/posts/:id"
            name="Posts"
            element={user ? <PostsPage /> : <Login />}
          />
          <Route
            path="/stories"
            name="Stories"
            element={user ? <StoriesPage /> : <Login />}
          />
          <Route
            path="/music"
            name="Music"
            element={user ? <MusicPage /> : <Login />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
