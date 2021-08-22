import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
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
    alignItems: 'center',
    textAlign: "center"
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
      borderRadius: 5,
      color: "#fff",
      height: "2.5rem",
    },
  },
  dateInput: {
    minWidth: "15rem",
    maxWidth: "20rem",
    margin: "1rem 0",
    border: "unset",
    borderRadius: 4,
    textIndent: "4px",
    color: "inherit",
    background: "#001233",
    borderRight: "solid 3px #ffb703",
    height: "3.5rem",
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
    "& .MuiNativeSelect-select:not([multiple]) option, .MuiNativeSelect-select:not([multiple]) optgroup": {
      background: "#312f2f"
    }
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
