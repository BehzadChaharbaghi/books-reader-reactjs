import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    // "& .MuiInput-underline:after": {
    //   borderBottom: "unset",
    // },
    "& .MuiInput-input": {
      color: "#fff",
    },
  },
  container: {
    display: "flex",
    width: "100%",
    background: "#08001A",
    color: "#fff",
    flexDirection: "column",
    margin: "auto",
    padding: "1rem 0",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  registerInfoSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    maxWidth: "100%",
    height: "17rem",
    maxHeight: "100vh",
    width: "32rem",
  },
  loginInfoSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    maxWidth: "100%",
    height: "10rem",
    maxHeight: "100vh",
    width: "32rem",
  },
  forgetPassSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: "100%",
    height: "max-content",
    maxHeight: "100vh",
    width: "32rem",
  },
  input: {
    border: "unset",
    borderRight: "solid 3px #0088FF",
    borderRadius: 4,
    textIndent: "4px",
  },
  textInput: {
    color: "#fff !important",
  },
  textSection: {
    textAlign: "center",
  },
  icon: {
    margin: "-5px 6px",
  },
  clickText: {
    color: "#00d3ff",
    textDecoration: "none",
  },
  btnSection: {
    display: "flex",
    background: "#08001A",
    justifyContent: "space-between",
  },
  btn: {
    width: "47%",
    maxWidth: "100%",
  },
}));

export default useStyles;
