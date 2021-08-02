import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginBottom: "8rem",
  },
  section: {
    margin: " 10rem auto",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    alignContent: "center",
    width: "80%",
  },
  text: {
    color: "#fff",
    fontSize: "1.5rem",
    fontWeight: 300,
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
  colorText: {
    color: "#00edff",
  },
}));

export default useStyles;
