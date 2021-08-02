import React from "react";
import ReactLoading from "react-loading";
import useStyles from "./styles";

const Loading = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ReactLoading type={"bars"} height={"5rem"} width={"5rem"} />
    </div>
  );
};

export default Loading;
