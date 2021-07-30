import React, { useState } from "react";
import useStyles from "./styles";
import { Divider, Drawer, IconButton, List, ListItem } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const DrawerMenu = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [login, setLogin] = useState(false);

  const itemDrawerLogin = [
    "ورود/ثبت نام",
    "صفحه اصلی",
    "دانلود اپلیکیشن",
    "سوالات متداول",
    "درباره ما",
  ];
  const itemCategorie = [
    "دسته بندی",
    "کتاب های صوتی",
    "پادکست",
    "سریال صوتی",
    "کپسول",
  ];

  return (
    <div>
      <IconButton
        edge={"end"}
        color={"inherit"}
        aria-label="open drawer"
        onClick={() => setOpen(true)}
      >
        <MenuIcon className={classes.icon} />
      </IconButton>
      <Drawer
        anchor={"right"}
        open={open}
        onClose={() => setOpen(false)}
        className={classes.drawer}
      >
        <div className={classes.drawerSection}>
          <List>
            <ListItem button>{itemDrawerLogin[0]}</ListItem>
            <ListItem button>{itemDrawerLogin[1]}</ListItem>
            <ListItem button>{itemDrawerLogin[2]}</ListItem>
            <ListItem button>{itemDrawerLogin[3]}</ListItem>
            <ListItem button>{itemDrawerLogin[4]}</ListItem>
            <Divider className={classes.divider} />
            <ListItem button>{itemCategorie[0]}</ListItem>
            <ListItem button>{itemCategorie[1]}</ListItem>
            <ListItem button>{itemCategorie[2]}</ListItem>
            <ListItem button>{itemCategorie[3]}</ListItem>
            <ListItem button>{itemCategorie[4]}</ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default DrawerMenu;
