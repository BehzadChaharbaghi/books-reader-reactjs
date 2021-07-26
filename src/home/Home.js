import React from "react";
import { CssBaseline } from "@material-ui/core";
import useStyles from "./styles";
import Navbar from "./components/Navbar/Navbar";
import PlaceToSound from "./components/PlaceToSound/PlaceToSound";
import DownloadSection from "./components/DownloadSection/DownloadSection";
import ServicesSite from "./components/ServicesSite/ServicesSite";

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <PlaceToSound />
      <DownloadSection />
      <ServicesSite />
    </div>
  );
};

export default Home;
