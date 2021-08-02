import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    background: "#09001A",
  },
  mainSection: {
    width: "98%",
    margin: "0 auto",
    marginTop: "1.5rem",
    textAlign: "center",
    color: "#000",
  },
  background: {
    position: "static",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "60vh",
    backgroundImage: `url(${
      process.env.PUBLIC_URL + "/images/index-main.png"
    })`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
    gridGap: 10,
  },
  spanRow: {
    gridAutoRows: "max-content",
    backgroundColor: "#09001A",
    borderRadius: 5,
    overflow: "hidden",
    paddingTop: "0.5rem",
    "& h1": {
      fontSize: "large",
      textAlign: "right",
      color: "#FFC400",
    },
  },
  sectionMore: {
    borderTop: "solid 7px #FFC400",
  },
  sectionFree: {
    display: "flex",
    flexDirection: "row",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/images/bg-hot.png"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "right",
    padding: " 1rem 0",
    color: "#fff",
    "& h1": {
      display: "none",
    },
    "& button": {
      fontWeight: "bold",
      borderRadius: 18,
      color: "#fff",
      borderColor: "#fff",
    },
  },
  sectionTextFree: {
    padding: "0 0.8rem",
    "& h3": {
      width: "6rem",
    },
  },
}));

export default useStyles;
