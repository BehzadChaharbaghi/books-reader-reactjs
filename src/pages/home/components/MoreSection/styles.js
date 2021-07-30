import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    margin: "0 auto",
    marginTop: "22rem",
    textAlign: "center",
    color: "#ddd",
  },
  container: {
    display: "flex",
    marginTop: "2rem",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    textAlign: "center",
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
      justifyContent: "space-around",
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      width: "100%",
      justifyContent: "space-around",
    },
  },
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
    margin: "1rem 0",
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
  loading: {
    display: "flex",
    justifyContent: "center",
    width: "80%",
    margin: "0 auto",
    marginTop: "22rem",
    textAlign: "center",
    color: "#ddd",
  },
}));

export default useStyles;
