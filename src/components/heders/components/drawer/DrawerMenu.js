import React, { useState } from "react";
import useStyles from "./styles";
import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const DrawerMenu = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [login, setLogin] = useState(false);

  const itemDrawerLogin = [
    {
      id: 0,
      title: "ورود/ثبت نام",
      url: "/login",
    },
    {
      id: 1,
      title: "صفحه اصلی",
      url: "/",
    },
    {
      id: 2,
      title: "دانلود اپلیکیشن",
      url: "/",
    },
    {
      id: 3,
      title: "سوالات متداول",
      url: "/",
    },
    {
      id: 4,
      title: "درباره ما",
      url: "/",
    },
  ];
  const itemCategorie = [
    {
      id: 0,
      title: "دسته بندی",
      url: "/",
    },
    {
      id: 1,
      title: "کتاب های صوتی",
      url: "/login",
    },
    {
      id: 2,
      title: "پادکست",
      url: "/login",
    },
    {
      id: 3,
      title: "سریال صوتی",
      url: "/login",
    },
    {
      id: 4,
      title: "کپسول",
      url: "/login",
    },
  ];

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <nav className={classes.nav}>
            <IconButton
              className={classes.iconMenu}
              aria-label="open drawer"
              onClick={() => setOpen(true)}
            >
              <MenuIcon className={classes.icon} />
            </IconButton>
          </nav>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor={"right"}
        open={open}
        onClose={() => setOpen(false)}
        className={classes.drawer}
      >
        <div className={classes.drawerSection}>
          <List>
            {itemDrawerLogin.map((item) => {
              return (
                <ListItem key={item.id} button>
                  {item.title}
                </ListItem>
              );
            })}
            ;
            <Divider className={classes.divider} />
            {itemCategorie.map((item) => {
              return (
                <ListItem key={item.id} button>
                  {item.title}
                </ListItem>
              );
            })}
            ;
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default DrawerMenu;
