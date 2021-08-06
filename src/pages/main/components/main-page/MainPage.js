import React from "react";
import useStyles from "./styles";
import classNames from "classnames/bind";
import MoreSection from "../../../landing page/components/MoreSection/MoreSection";
import FreeSection from "../../../landing page/components/FreeSection/FreeSection";
import {
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
} from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import MostSell from "../MostSell/MostSell";

const isLogin = () => !!localStorage.getItem("token");

const MainPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <section className={classes.background} />
      <section className={classes.mainSection}>
        <div className={!isLogin ? classes.grid : classes.gridAfterLogin}>
          <div className={classNames(classes.spanRow, classes.sectionMore)}>
            <MoreSection />
          </div>
          <div
            className={classNames(classes.spanRow, classes.sectionBestsellers)}
          >
            <section className={classes.sectionTextBtn}>
              <h3>پرفروش ها</h3>
              <Button variant={"outlined"}>بیشتر</Button>
            </section>
            <MostSell />
          </div>
          <div className={classNames(classes.spanRow, classes.sectionViewBook)}>
            <section className={classes.textTitleViewBook}>
              <h3>موفقیت</h3>
            </section>
            <FreeSection />
          </div>
          <div className={classNames(classes.spanRow, classes.sectionFree)}>
            <section className={classes.sectionTextBtn}>
              <h3>رایگان ها</h3>
              <Button variant={"outlined"}>بیشتر</Button>
            </section>
            <MostSell />
          </div>
          <div className={classNames(classes.spanRow, classes.sectionViewBook)}>
            <section className={classes.textTitleViewBook}>
              <h3>جدیدترین های تاک</h3>
            </section>
            <MostSell />
          </div>
          {/*Footer Section*/}
          <div className={classes.spanRowFooter}>
            <Grid className={classes.imageContainer} item xs={12}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    className={classes.mediaCenter}
                    image={"/images/podcast.png"}
                    title="image"
                  />
                  <section className={classes.textPodcast}>
                    <h1>پخش</h1>
                    <PlayArrowIcon />
                  </section>
                </CardActionArea>
              </Card>
            </Grid>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
