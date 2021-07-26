import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    margin: "0 auto",
    marginTop: "22rem",
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
      justifyContent: "space-evenly",
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      width: "100%",
      justifyContent: "space-evenly",
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
    width: "20rem",
    maxHeight: "30rem",
    margin: "1rem 1rem",
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
      justifyContent: "space-evenly",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "space-evenly",
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
