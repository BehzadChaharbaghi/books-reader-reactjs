import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   clear: "both",
  //   position: "relative",
  //   height: "4rem",
  //   background: "#0d0127",
  // },
  appbar: {
    position: "fixed",
    backgroundColor: "transparent",
    backdropFilter: "blur(3px)",
    color: "#fff",
  },
  nav: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    // paddingRight: "3rem",
    justifyContent: "flex-start",
    textAlign: "center",
    alignItems: "center",
    alignContent: "center",
  },
  logoBtn: {
    padding: 0,
  },
  logoImg: {
    width: "4rem",
    height: "4rem",
  },
  appbarWrapper: {
    width: "100%",
  },
  link: {
    display: "flex",
    flexDirection: "row",
    textDecoration: "none",
  },
  appbarTitle: {
    fontWeight: 400,
    marginRight: "1rem",
    color: "#fff",
    "&:hover": {
      color: "#00EDFF",
    },
  },
  btnLogin: {
    backgroundColor: "#ffffff",
    borderRadius: 28,
    "&:hover": {
      boxShadow: "0 3px 50px 0 rgba(255, 255, 255, 0.24)",
      backgroundColor: "#ffffff",
    },
  },
}));

export default useStyles;
