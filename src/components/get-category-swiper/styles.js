import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    margin: "0 auto",
    textAlign: "center",
    color: "#ddd",
  },
  textTitleViewBook: {
    // background: "#000814",
    textAlign: "right",
    marginRight: 0.5,
    paddingRight: "0.5rem",
    borderRight: "solid 6px #fff",
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
      width: "98%",
      justifyContent: "space-around",
    },
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    background: "#08001a",
    color: "#fff",
    width: "14rem",
    height: "21rem",
    // margin: "0 1rem",
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
  containerContent: {
    padding: " 0.5rem",
  },
  title: {
    color: "#ddd",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textAlign: "right",
  },
  lineCenter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  lastLine: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  author: {
    color: "#ddd",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textAlign: "right",
    fontWeight: 200,
  },
  badge: {
    display: "inline",
    borderRadius: 8,
    fontWeight: 200,
    background: "#ffaa00",
    color: "#000",
    padding: "0.2rem",
  },
  price: {
    color: "#00edff",
    whiteSpace: "nowrap",
    textAlign: "right",
    fontWeight: 200,
  },
}));

export default useStyles;
