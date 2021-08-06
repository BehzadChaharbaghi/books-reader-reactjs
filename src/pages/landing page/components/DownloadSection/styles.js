import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "80%",
    margin: "0 auto",
    justifyContent: "center",
    backgroundColor: "#08001a",
    borderRadius: 5,
  },
  downloadSection: {
    display: "flex",
    [theme.breakpoints.down("xl")]: {
      flexDirection: "row",
      alignItems: "center",
      "& img": {
        maxWidth: "15vw",
      },
    },
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      "& img": {
        maxWidth: "15rem",
      },
    },
  },
  container: {
    margin: "auto 0",
  },
  text: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    color: "#fff",
    "& h1": {
      fontWeight: 400,
    },
    "& h2": {
      fontWeight: 200,
    },
    [theme.breakpoints.down("md")]: {
      margin: "0 1.5rem",
      textAlign: "center",
    },
  },
  sectionBtn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    textAlign: "center",
    marginTop: "1.5rem",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
}));

export default useStyles;
