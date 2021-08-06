import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    width: "80%",
    margin: "0 auto",
    // marginTop: "10rem",
    color: "#fff",
  },
  btnSection: {
    fontSize: "1em",
    "& button": {
      borderRadius: 50,
    },
    [theme.breakpoints.down("xs")]: {
      "& button": {
        fontSize: "0.5rem",
      },
    },
  },
}));

export default useStyles;
