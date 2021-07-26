import React from "react";
import useStyles from "./styles";
import { Button, IconButton } from "@material-ui/core";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <IconButton className={classes.btn}>
        <ExpandLessIcon />
      </IconButton>
      <section className={classes.container}>
        {/*logo section*/}
        <div className={classes.firstLine}>
          <section className={classes.logoSection}>
            <h1>Logo</h1>
            <h3>
              از بهترین کتاب های صوتی گرفته تا پادکست های اختصاصی تاک بهترین راه
              برای شنیدن سرگرمی های صوتی است
            </h3>
            <div className={classes.icons}>
              <YouTubeIcon />
              <FacebookIcon />
              <TwitterIcon />
              <InstagramIcon />
            </div>
          </section>
        </div>
        {/*download section*/}
        <div>
          <section className={classes.dlSection}>
            <h1>دانلود اپلیکیشن</h1>
            <h3>با نصب اپلیکیشن نوار همیشه و همه جا کتابخانه تان با شماست</h3>
            <div className={classes.btnDownload}>
              <Button href={"#"}>
                <img src={"/images/app-store.png"} />
              </Button>
              <Button href={"#"}>
                <img src={"/images/play-store.png"} />
              </Button>
            </div>
          </section>
        </div>
        {/*namad section*/}
        <div>
          <section className={classes.namadSection}>
            <h1>نماد اعتماد الکترونیکی</h1>
            <div>
              <img className={classes.namadImg} src={"/images/namad.png"} />
            </div>
          </section>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
