import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    margin: "0 auto",
    background: "#09001A",
    overflow: "hidden",
    color: "#fff",
    "& .MuiFormLabel-root": {
      color: "#ddd !important",
    },
  },
  container: {
    display: "flex",
    justifyContent: "center",
  },
  input: {
    minWidth: "15rem",
    maxWidth: "20rem",
    margin: "1rem 0",
    border: "unset",
    borderRadius: 4,
    textIndent: "4px",
    color: "inherit",
    "& .MuiInputBase-input": {
      background: "#001233",
      borderRight: "solid 3px #ffb703",
      color: "#fff",
      height: "2.5rem",
    },
  },
  dateInput: {
    "& input": {
      minWidth: "15rem",
      background: "#001233",
      borderRight: "solid 3px #ffb703",
      height: "2.5rem",
      maxWidth: "20rem",
      margin: "1rem 0",
      border: "unset",
      borderRadius: 4,
      textIndent: "4px",
      color: "inherit",
    },
  },
  selectInput: {
    minWidth: "15rem",
    maxWidth: "20rem",
    border: "unset",
    borderRadius: 4,
    textIndent: "4px",
    color: "inherit",
    background: "#001233",
    "& .MuiInputBase-input": {
      borderRight: "solid 3px #ffb703",
      color: "#fff",
      height: "2.5rem",
    },
  },
  btnSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& button": {
      width: "11rem",
    },
  },
  btnSave: {
    marginLeft: "2rem",
  },
}));

export default useStyles;
