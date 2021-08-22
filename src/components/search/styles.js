import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "2rem",
  },
  searchInput: {
    width: "12rem",
    border: "solid 1px #fff",
    height: "1.8rem",
    borderRadius: 15,
    backgroundColor: "unset",
    color: "#fff",
    outline: "unset",
    caretColor: "#ddd",
    padding: "0 5px 0 0",
    "&:a": {
      textDecoration: "none",
    },
  },
  btn: {
    padding: 0,
    color: "#fff",
  },
}));
export default useStyles;
