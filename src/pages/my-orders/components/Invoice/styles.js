import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  infoGrid: {
    width: "100%",
  },
  infoItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sumPrice: {
    color: "#00edff",
  },
}));

export default useStyles;
