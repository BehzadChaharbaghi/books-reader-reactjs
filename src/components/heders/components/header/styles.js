import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    clear: "both",
    position: "relative",
    height: "4.5rem",
    background: "#09001A",
  },
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
  // ravesh dirty baraye ekhtesas dadan stylr bad az login...
  navAfterLogin: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    // paddingRight: "3rem",
    justifyContent: "flex-start",
    textAlign: "center",
    alignItems: "center",
    alignContent: "center",
    marginRight: "4rem",
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
    justifyContent: "center",
    alignItems: "center",
  },
  iconTitle: {
    marginRight: "1rem",
    "& svg": {
      width: "2rem",
      height: "2rem",
      color: "#fff",
      marginTop: 6,
    },
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
  containerProfile: {
    cursor: "pointer",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    direction: "ltr",
    "& input": {
      display: "none",
    },
  },
  imgProfile: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    marginRight: "0.5rem",
  },
  menu: {
    margin: "3.5rem 0 0 0",
    "& .MuiMenu-paper": {
      background: "#212121",
      color: "#fff",
      borderRadius: "0 1rem 0 1rem",
    },
    "& .MuiListItem-button:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.15)",
    },
  },
  linkMenu: {
    textDecoration: "none",
    color: "inherit",
  },
}));

export default useStyles;
