import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    minHeight: "100vh",
    width: "95%",
    margin: "0 auto",
    marginTop: "1.5rem",
    textAlign: "center",
  },
  link: {
    textDecoration: "none",
    color: "#fff",
  },
  container: {
    width: "90%",
    marginBottom: 0,
  },
  imageContainer: {
    margin: "1rem 0",
  },

  media: {
    height: "10rem",
    maxHeight: "15rem",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    "&:hover": {
      transition: "transform 1s",
      transform: "scale(1.5)",
    },
    [theme.breakpoints.down("sm")]: {
      height: "12rem",
    },
  },
  mediaCenter: {
    height: "17rem",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    "&:hover": {
      transition: "transform 1s",
      transform: "scale(1.5)",
    },
    [theme.breakpoints.down("sm")]: {
      height: "20rem",
    },
  },
  textImg: {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#fff",
  },
  textPodcast: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    color: "#ffc400",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    "& svg": {
      width: "4rem",
      height: "4rem",
    },
  },
}));

export default useStyles;
