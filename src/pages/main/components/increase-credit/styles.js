import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    width: "80%",
    margin: "0 auto",
    marginTop: "3rem",
    color: "#fff",
    "& fieldset": {
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: 0,
      marginBottom: "10rem",
    },
  },
  formTitle: {
    textAlign: "center",
  },
  radioContainer: {
    marginBottom: "1rem",
  },
  radioSection: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 7,
    padding: "0.5rem",
    marginBottom: "0.5rem",
    background: "#14213d",
    "& .MuiFormControlLabel-root": {
      margin: 0,
    },
    [theme.breakpoints.down("xs")]: {
      "& .MuiTypography-root": {
        fontSize: "0.7rem",
      },
      // "& .MuiFormControlLabel-label": {
      //   minWidth: "190.578px",
      // },
    },
  },
}));

export default useStyles;
