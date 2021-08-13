import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& button": {
      color: "#fff",
      borderRadius: "50%",
    },
    "& input": {
      display: "none",
    },
  },
}));

export default useStyles;
