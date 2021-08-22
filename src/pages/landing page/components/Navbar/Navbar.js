import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import {
  Collapse,
  IconButton,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
// {__Icons__}
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ListIcon from "@material-ui/icons/List";
import DrawerMenu from "../../../../components/heders/components/drawer/DrawerMenu";
import Header from "../../../../components/heders/components/header/Header";
import { Link } from "react-router-dom";
import {
  getMostSelledProducts,
  getNavbarItems,
} from "../../../../api/api_content";
import { toast } from "material-react-toastify";
import Loading from "../../../../components/Loading/Loading";

const Navbar = () => {
  const classes = useStyles();
  //{__State__}
  const [checked, setChecked] = useState(false);
  const [navItems, setNavItems] = useState([]);
  const [isLoading, setLoading] = useState(true);
  //{__Breakpoints__}
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    setChecked(true);
    getNavbarItems((isOk, data) => {
      if (!isOk) return toast.warning(data.message);
      setNavItems(data);
      setLoading(false);
    });
  }, []);

  const navItem = navItems.map((item) => {
    return (
      <Link to={`${item.url}`} className={classes.link}>
        <h3>{item.title}</h3>
      </Link>
    );
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={classes.root}>
      {/*<AppBar className={classes.appbar} elevation={0}>*/}
      {/*  {isMatch ? <DrawerMenu /> : <Header />}*/}
      {/*</AppBar>*/}
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
