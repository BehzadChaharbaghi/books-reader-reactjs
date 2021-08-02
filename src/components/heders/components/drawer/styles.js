import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    clear: "both",
    position: "relative",
    height: "3.5rem",
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
    justifyContent: "flex-start",
    textAlign: "center",
    alignItems: "center",
    alignContent: "center",
  },
  appbarWrapper: {
    width: "100%",
  },
  iconMenu: {
    color: "#fff",
  },
  drawer: {
    "& .MuiDrawer-paper": {
      background: "#212121",
      color: "#fff",
      borderLeft: "solid 0.5px #0088FF",
    },
  },
  drawerSection: {
    width: 230,
    "& .MuiDivider-root": {
      background: "#424242",
    },
  },
}));

export default useStyles;
