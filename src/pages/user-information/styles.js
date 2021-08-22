import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#09001A",
    overflow: "hidden",
    color: "#fff",
    [theme.breakpoints.up("md")]: {

      marginRight: "5rem",
    },
  },
  title: {
    textAlign: "center",
  },
}));

export default useStyles;
