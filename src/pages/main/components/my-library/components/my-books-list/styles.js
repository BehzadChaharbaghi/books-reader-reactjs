import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: { marginTop: "2rem" },
  cardContainer: {
    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-start",
    },
  },
}));

export default useStyles;
