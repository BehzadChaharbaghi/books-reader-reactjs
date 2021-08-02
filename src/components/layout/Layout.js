import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RightSideBar from "../rightsidebar/RightSideBar";
import Heders from "../heders/Heders";

const Layout = (props) => {
  return (
    <div>
      {/*<RightSideBar />*/}
      <Heders />
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
