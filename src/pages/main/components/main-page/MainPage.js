import React from "react";
import useStyles from "./styles";
import classNames from "classnames/bind";
import MoreSection from "../../../landing page/components/MoreSection/MoreSection";
import FreeSection from "../../../landing page/components/FreeSection/FreeSection";
import { Button } from "@material-ui/core";

const MainPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <section className={classes.background} />
      <section className={classes.mainSection}>
        <div className={classes.grid}>
          <div className={classNames(classes.spanRow, classes.sectionMore)}>
            <MoreSection />
          </div>
          <div className={classNames(classes.spanRow, classes.sectionFree)}>
            <section className={classes.sectionTextFree}>
              <h3>پرفروش ها</h3>
              <Button variant={"outlined"}>بیشتر</Button>
            </section>
            <FreeSection />
          </div>
          <div className={classes.spanRow}>Item 3</div>
          <div className={classes.spanRow}>Item 4</div>
          <div className={classes.spanRow}>Item 5</div>
          <div>Item 6</div>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
