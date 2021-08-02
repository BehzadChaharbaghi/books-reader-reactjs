import React from "react";
import { Button, IconButton, useMediaQuery, useTheme } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import FolderIcon from "@material-ui/icons/Folder";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import InfoIcon from "@material-ui/icons/Info";
import FlareOutlinedIcon from "@material-ui/icons/FlareOutlined";

const RightSideBar = () => {
  const items = [
    { icon: <LocalMallIcon /> },
    { icon: <AccountBalanceWalletIcon /> },
    { icon: <FolderIcon /> },
    { icon: <QuestionAnswerIcon /> },
    { icon: <InfoIcon /> },
  ];
  //{__Breakpoints__}
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <section className={classes.section}>
        {!isMatch && (
          <>
            <IconButton
              className={classes.logoBtn}
              aria-label="logo picture"
              component="span"
            >
              <img className={classes.logoImg} src={"/images/logo.png"} />
            </IconButton>
          </>
        )}
        <section>
          {items.map((item) => {
            return (
              <Button>
                <Link className={classes.link} to={"/index"}>
                  <div className={classes.iconSection}>{item.icon}</div>
                </Link>
              </Button>
            );
          })}
        </section>
        {!isMatch && (
          <>
            <IconButton
              className={classes.lightBtn}
              aria-label="logo picture"
              component="span"
            >
              <FlareOutlinedIcon className={classes.lighticon} />
            </IconButton>
          </>
        )}
      </section>
    </div>
  );
};

export default RightSideBar;
