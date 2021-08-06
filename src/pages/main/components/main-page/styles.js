import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    background: "#09001A",
  },
  mainSection: {
    width: "98%",
    margin: "0 auto",
    marginTop: "1.5rem",
    textAlign: "center",
    color: "#000",
  },
  background: {
    position: "static",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "60vh",
    backgroundImage: `url(${
      process.env.PUBLIC_URL + "/images/index-main.png"
    })`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
    gridGap: 10,
  },
  gridAfterLogin: {
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
    gridGap: 10,
    marginRight: "5rem",
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
    },
  },
  spanRow: {
    gridAutoRows: "max-content",
    backgroundColor: "#09001A",
    borderRadius: 5,
    overflow: "hidden",
    paddingTop: "0.5rem",
    "& h1": {
      fontSize: "large",
      textAlign: "right",
      color: "#FFC400",
    },
  },
  sectionMore: {
    borderTop: "solid 7px #FFC400",
  },
  sectionBestsellers: {
    display: "flex",
    flexDirection: "row",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/images/bg-hot.png"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "right",
    padding: " 1rem 0",
    color: "#fff",
    "& h1": {
      display: "none",
    },
    "& button": {
      fontWeight: "bold",
      borderRadius: 18,
      color: "#fff",
      borderColor: "#fff",
    },
  },
  sectionTextBtn: {
    display: "flex",
    flexDirection: "column",
    padding: "0 0.8rem",
    "& h3": {
      width: "6rem",
    },
    "& button": {
      height: "max-content",
    },
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      justifyContent: "center",
      textAlign: "center",
      alignContent: "center",
      alignItems: "center",
      marginBottom: "auto",
    },
  },
  sectionViewBook: {
    display: "flex",
    background: "#11151c",
    flexDirection: "column",
    justifyContent: "center",
    padding: 0,
    paddingBottom: " 1rem",
    color: "#fff",
    "& h1": {
      display: "none",
    },
  },
  textTitleViewBook: {
    // background: "#000814",
    textAlign: "right",
    marginRight: 0.5,
    paddingRight: "0.5rem",
    borderRight: "solid 6px #fff",
  },
  sectionFree: {
    display: "flex",
    flexDirection: "row",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/images/bg-free.png"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "right",
    padding: " 1rem 0",
    color: "#fff",
    "& h1": {
      display: "none",
    },
    "& button": {
      fontWeight: "bold",
      borderRadius: 18,
      color: "#fff",
      borderColor: "#fff",
    },
  },
  spanRowFooter: {
    gridAutoRows: "max-content",
    overflow: "hidden",
    paddingTop: "0.5rem",
    "& h1": {
      fontSize: "large",
      textAlign: "right",
      color: "#FFC400",
    },
  },
  imageContainer: {
    margin: "1rem 0",
  },
  mediaCenter: {
    height: "17rem",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    "&:hover": {
      transition: "transform 1s",
      transform: "scale(1.5)",
    },
    [theme.breakpoints.down("sm")]: {
      height: "20rem",
    },
  },
  textPodcast: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    color: "#ffc400",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    "& svg": {
      width: "4rem",
      height: "4rem",
    },
    "& h1": {
      fontSize: "3rem",
    },
  },
}));

export default useStyles;
