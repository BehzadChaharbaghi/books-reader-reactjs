import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    color: "#fff",
  },
  section: {
    margin: " 10rem auto",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    alignContent: "center",
    width: "80%",
  },
  btnLogin: {
    fontFamily: "shabnam",
    color: "#fff",
    background:
      "radial-gradient(at left top, #0033ff, #0700cb), radial-gradient(at left bottom, #0700cb, #0700cb)",
    borderRadius: 5,
    fontSize: "2.5rem",
    fontWeight: 400,
    padding: "1.5rem 3.2rem",
    [theme.breakpoints.down("xs")]: {
      padding: "0.5rem 2rem",
      fontWeight: 600,
      fontSize: "1.2rem",
    },
  },
  text: {
    color: "#fff",
    fontSize: "3rem",
    fontWeight: 400,
    [theme.breakpoints.down("xs")]: {
      fontWeight: 600,
      fontSize: "1.2rem",
    },
  },
}));

export default useStyles;
