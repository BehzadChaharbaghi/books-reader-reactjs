import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    height: "max-content",
    margin: "auto",
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
  },
  container: {
    clipPath: "ellipse(90% 96% at 50% 96%)",
    width: "100%",
    background: "#060013",
    color: "#ddd",
    backgroundSize: "cover",
    backgroundPosition: "center",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      textAlign: "right",
      padding: "1rem 1rem",
    },
  },
  btn: {
    transform: "translateY(1rem)",
    zIndex: 1,
    background: "#fff",
    color: "#000",
    "&:hover": {
      background: "#000",
    },
  },
  firstLine: {
    background: "unset",
  },
  logoSection: {
    marginTop: "2rem",

    // "& h1": {
    //   margin: 0,
    //   padding: 0,
    // },
    // "& h3": {
    //   margin: 0,
    //   padding: 0,
    // },
  },
  icons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  dlSection: {
    marginTop: "2rem",
    "& a": {
      padding: "0 0 0 0.5rem",
    },
  },
  namadSection: {
    marginTop: "2rem",
  },
  namadImg: {
    width: "14rem",
    height: "7rem",
  },
}));

export default useStyles;
