import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   clear: "both",
  //   position: "relative",
  //   width: "4rem",
  //   background: "#0d0127",
  // },
  section: {
    display: "flex",
    position: "fixed",
    zIndex: 99,
    flexDirection: "row",
    background: "#1cb3cf",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "fff",
    // padding: "2px 0",
    width: "100%",
    bottom: 0,
    "& section": {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
    },
    [theme.breakpoints.up("md")]: {
      zIndex: 9999,
      flexDirection: "column",
      width: "5rem",
      height: "100vh",
      justifyContent: "space-between",
      "& section": {
        flexDirection: "column",
      },
    },
  },
  link: {
    textDecoration: "none",
    color: "#fff",
  },
  logoBtn: {
    padding: 0,
  },
  logoImg: {
    width: "4rem",
    height: "4rem",
  },
  lightBtn: {
    padding: 14,
    backgroundColor: "#595959",
    marginBottom: "1rem",
    "&:hover": {
      backgroundColor: "#595959",
    },
  },
  lighticon: {
    width: "1.5rem",
    height: "1.5rem",
    color: "#fff",
  },
  iconSection: {
    "& svg": {
      width: "50%",
      maxWidth: "5rem",
      height: "auto",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "1.5rem",
    },
  },
}));

export default useStyles;
