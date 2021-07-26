import React from "react";
import useStyles from "./styles";

const PlaceToSound = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <section className={classes.section}>
        <img src={"/images/microphone.png"} />
        <h3 className={classes.text}>
          از بهترین کتاب های صوتی گرفته تا پادکست های اختصاصی <br />
          <span className={classes.colorText}>
            تاک بهترین راه برای شنیدن سرگرمی های صوتی است
          </span>
        </h3>
      </section>
    </div>
  );
};

export default PlaceToSound;
