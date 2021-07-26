import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import {
  AppBar,
  Collapse,
  IconButton,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
// {__Icons__}
import MenuIcon from "@material-ui/icons/Menu";
import DrawerComponent from "../DrawerComponent/DrawerComponent";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ListIcon from "@material-ui/icons/List";

const Navbar = () => {
  const classes = useStyles();
  //{__State__}
  const [checked, setChecked] = useState(false);
  //{__Breakpoints__}
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("xs"));
  const navItem = ["کتاب های صوتی", "پادکست", "سریال صوتی", "کپسول"].map(
    (item) => {
      return (
        <a href={"#"}>
          <h3>{item}</h3>
        </a>
      );
    }
  );

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={0}>
        {isMatch ? (
          <DrawerComponent />
        ) : (
          <Toolbar className={classes.appbarWrapper}>
            <h1 className={classes.appbarTitle}>
              <span className={classes.colorText}>جزیره</span> من
            </h1>
            <IconButton>
              <MenuIcon className={classes.icon} />
            </IconButton>
          </Toolbar>
        )}
      </AppBar>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <section>
          <div className={classes.containerText}>
            <h1 className={classes.faCenterText}>کتاب گوش کنیم !</h1>
            <h2 className={classes.enCenterText}>!Let's Listen & TAAK</h2>
          </div>
          <div className={classes.containerDown}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </div>
        </section>
      </Collapse>
      {!isMatch && (
        <section className={classes.containerAssortment}>
          <Toolbar className={classes.assortmentToolbar}>
            <a href={"#"} style={{ padding: 0 }}>
              <ListIcon />
            </a>
            {navItem}
          </Toolbar>
        </section>
      )}
    </div>
  );
};

export default Navbar;
