import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "./Menubar/Menu";

const MainLaout = () => {
  return (
    <div>
      <Menu></Menu>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLaout;
