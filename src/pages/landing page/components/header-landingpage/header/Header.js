import React, { useState } from "react";
import useStyles from "./styles";
import { AppBar, Button, IconButton, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";
import "material-react-toastify/dist/ReactToastify.css";
import MicNoneIcon from "@material-ui/icons/MicNoneOutlined";
import ImportContactsIcon from "@material-ui/icons/ImportContactsOutlined";
import GroupWorkIcon from "@material-ui/icons/GroupWorkOutlined";
import LocalPharmacyOutlinedIcon from "@material-ui/icons/LocalPharmacyOutlined";

const Header = () => {
  const classes = useStyles();
  const isLogin = () => !!localStorage.getItem("token");

  const pubTitles = [
    { title: "صفحه اصلی" },
    { title: "دانلود اپلیکیشن" },
    { title: "سوالات متداول" },
    { title: "درباره ما" },
  ];
  const loginTitles = [
    { title: "پادکست", icon: <MicNoneIcon /> },
    { title: "کتاب صوتی", icon: <ImportContactsIcon /> },
    { title: "سریال صوتی", icon: <GroupWorkIcon /> },
    { title: "کپسول", icon: <LocalPharmacyOutlinedIcon /> },
  ];

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          {!isLogin() && (
            <>
              <nav className={classes.nav}>
                <IconButton
                  className={classes.logoBtn}
                  aria-label="logo picture"
                  component="span"
                >
                  <img className={classes.logoImg} src={"/images/logo.png"} />
                </IconButton>
                شح
                {pubTitles.map((item) => {
                  return (
                    <Button>
                      <Link className={classes.link} to={"/index"}>
                        <h3 className={classes.appbarTitle}>{item.title}</h3>
                      </Link>
                    </Button>
                  );
                })}
              </nav>
              <Link className={classes.link} to={"/login"}>
                <Button className={classes.btnLogin}>ورود / ثبت نام</Button>
              </Link>
            </>
          )}
          {isLogin() && (
            <>
              <nav className={classes.nav}>
                {loginTitles.map((item) => {
                  return (
                    <Button>
                      <Link className={classes.link} to={"/index"}>
                        <span className={classes.iconTitle}>{item.icon}</span>
                        <h3 className={classes.appbarTitle}>{item.title}</h3>
                      </Link>
                    </Button>
                  );
                })}
              </nav>
              <Link className={classes.link} to={"/index"}>
                <Button className={classes.btnLogin}>ورود به پنل</Button>
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
