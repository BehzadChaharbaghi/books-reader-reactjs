import React from "react";
import useStyles from "./styles";
import Input from "@material-ui/core/Input";

const SingleComment = ({ commentList }) => {
  const classes = useStyles();

  return (
    <>
      {commentList.map((comment) => {
        <div className={classes.root} key={comment.id}>
          <Input
            className={classes.commentInput}
            disableUnderline
            disabled
            value={comment.text}
          />
          {}
        </div>;
      })}
    </>
  );
};

export default SingleComment;
