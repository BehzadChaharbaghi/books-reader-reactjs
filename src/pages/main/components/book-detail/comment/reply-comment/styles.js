import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    width: "80%",
    margin: "0 auto",
  },
  gridItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    alignContent: "center",
  },
  rateSection: {
    display: "flex",
    flexDirection: "row",
    "& h4": {
      margin: 0,
    },
    justifyContent: "space-evenly",
    marginBottom: "0.8rem",
  },
  infoGrid: {
    width: "100%",
  },
  infoItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  priceBox: { borderTop: "solid 3px #8338ec", borderRadius: 4 },
  priceSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign: "center",
    color: "#ffbe0b",
  },
  btnSection: {
    "& button": {
      marginBottom: 3,
    },
  },
  twoBtn: { display: "flex", flexDirection: "row" },
  infoSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputContainer: {
    width: "100%",
  },
  input: {
    background: "#060013",
    color: "#ddd",
    marginRight: "1rem",
    border: "none",
    flex: 1,
    minWidth: "100%",
    "&:focus": {
      outline: "unset",
    },
  },
  submitContainer: {
    width: "100%",
  },
  submitComment: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    minWidth: "100%",
  },
}));

export default useStyles;
