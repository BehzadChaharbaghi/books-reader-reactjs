import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    background: "unset",
    color: "#fff",
    width: "15rem",
    height: "16rem",
    // margin: "0 1rem",
    borderRadius: 15,
    "& a": {
      textDecoration: "unset",
      width: "100%",
    },
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
      justifyContent: "space-around",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "space-around",
    },
  },
  media: {
    height: "14rem",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  title: {
    color: "#ddd",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  desc: {
    color: "#ddd",
  },
}));

export default useStyles;
