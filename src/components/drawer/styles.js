import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
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
