import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: "0 auto",
    background: "#09001A",
    overflow: "hidden",
    color: "#fff",
    backgroundColor: "#14213d",
    borderRadius: 4,
  },
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    position: "relative",
  },
  closeIco: {
    position: "absolute",
    top: 3,
    left: 3,
    color: "#ddd",
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
}));

export default useStyles;
