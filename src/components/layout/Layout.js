import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RightSideBar from "../rightsidebar/RightSideBar";
import Heders from "../heders/Heders";
import useStyles from "./styles";

const isLogin = () => !!localStorage.getItem("token");

const Layout = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {isLogin() && <RightSideBar />}
      {/*<RightSideBar />*/}
      <Heders />
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
