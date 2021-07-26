import React from "react";
import { CssBaseline } from "@material-ui/core";
import useStyles from "./styles";
import Navbar from "./components/Navbar/Navbar";
import PlaceToSound from "./components/PlaceToSound/PlaceToSound";
import DownloadSection from "./components/DownloadSection/DownloadSection";
import ServicesSite from "./components/ServicesSite/ServicesSite";
import MoreSection from "./components/MoreSection/MoreSection";
import FreeSection from "./components/FreeSection/FreeSection";
import LoginNow from "./components/LoginNow/LoginNow";
import Footer from "./components/Footer/Footer";

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <PlaceToSound />
      <DownloadSection />
      <ServicesSite />
      <MoreSection />
      <FreeSection />
      <LoginNow />
      <Footer />
    </div>
  );
};

export default Home;
