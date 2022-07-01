import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Users from "../Pages/Users";
import UserDetails from "../Pages/UserDetails";
import "../styles/Routes.scss";

function PagesRoutes() {
  return (
    <>
      <div className="pageContainer">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" exact element={<UserDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default PagesRoutes;
