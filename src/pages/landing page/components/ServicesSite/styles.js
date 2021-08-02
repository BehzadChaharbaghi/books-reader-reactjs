import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    margin: "0 auto",
    marginTop: "4rem",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      width: "100%",
      justifyContent: "space-between",
    },
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-evenly",
    width: "20rem",
    height: "24rem",
    marginTop: "1rem",
    backgroundColor: "#08001a",
    borderRadius: 5,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  typography: {
    textAlign: "center",
    padding: "0 0.5rem",
  },
  title: {
    color: "#00edff",
    marginBottom: "1rem",
  },
  desc: {
    color: "#ddd",
  },
}));

export default useStyles;
