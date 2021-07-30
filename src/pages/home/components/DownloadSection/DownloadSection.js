import useStyles from "./styles";
import { useMediaQuery, useTheme } from "@material-ui/core";

function DownloadSection() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <section className={classes.downloadSection}>
        <img className={classes.mobile} src={"/images/mobile.png"} />
        <div className={classes.container}>
          <section className={classes.text}>
            <h1>دانلود اپلیکیشن تاک</h1>
            <h3>
              هزاران کتاب صوتی و پادکست با اپلیکیشن تاک در دسترس شما خواهد بود
            </h3>
          </section>
          <section className={classes.sectionBtn}>
            <a href={"#"}>
              <img src={"/images/sibapp.png"} />
            </a>
            <a href={"#"}>
              <img src={"/images/playstore.png"} />
            </a>
            <a href={"#"}>
              <img src={"/images/appstore.png"} />
            </a>
            <a href={"#"}>
              <img src={"/images/bazzar.png"} />
            </a>
          </section>
        </div>
      </section>
    </div>
  );
}

export default DownloadSection;
