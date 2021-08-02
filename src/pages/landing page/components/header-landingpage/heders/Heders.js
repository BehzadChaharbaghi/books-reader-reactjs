import React from "react";
import { useMediaQuery, useTheme } from "@material-ui/core";
import DrawerMenu from "../drawer/DrawerMenu";
import Header from "../header/Header";

const Heders = () => {
  //{__Breakpoints__}
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  return <div>{isMatch ? <DrawerMenu /> : <Header />}</div>;
};

export default Heders;
