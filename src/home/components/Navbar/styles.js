import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // height: "100vh",
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/images/landing.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  appbar: {
    background: "none",
  },
  appbarWrapper: {
    width: "100%",
  },
  appbarTitle: {
    flexGrow: 1,
  },
  icon: {
    color: "#fff",
    fontSize: "2rem",
  },
  colorText: {
    color: "#2ecc71",
  },
  containerText: {
    display: "flex",
    borderRight: "solid 1rem #fff",
    flexDirection: "column",
    padding: 0,
    marginTop: "16rem",
    lineHeight: 0.4,
  },
  faCenterText: {
    color: "#ffc400",
    textShadow: "0 3px 32px #ff0000",
    fontSize: "2.5rem",
    fontWeight: 400,
    textAlign: "left",
  },
  enCenterText: {
    color: "#fff",
    textShadow: "0 3px 35px #000000",
    fontSize: "1rem",
    fontWeight: 400,
    textAlign: "left",
    letterSpacing: 8,
  },
  containerDown: {
    display: "flex",
    flexDirection: "row",
    padding: 0,
    marginTop: "4rem",
    justifyContent: "center",
  },
  goDown: {
    color: "#fff",
    fontSize: "4rem",
  },
  containerAssortment: {
    background: "#000",
    marginTop: "100vh",
    position: "absolute",
    width: "80%",
  },
  assortmentToolbar: {
    textAlign: "center",
    "& a": {
      paddingRight: "1.8rem",
      textDecoration: "none",
      color: "#fff",
      "&:hover": {
        color: "#00edff",
      },
    },
    "& h3": {
      padding: 0,
      margin: 0,
      fontWeight: 400,
    },
    "& svg": {
      fontSize: "2.2rem",
      transform: "scaleX(-1)",
      marginTop: "0.2rem",
    },
  },
}));

export default useStyles;
