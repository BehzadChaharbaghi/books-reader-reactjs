import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import SingleComment from "./single-comment/SingleComment";
import ReplyComment from "./reply-comment/ReplyComment";
import {
  getCommentOfProduct,
  getMostSelledProducts,
} from "../../../../../api/api_content";
import { toast } from "material-react-toastify";
import Loading from "../../../../../components/Loading/Loading";

const Comment = ({ productId }) => {
  const classes = useStyles();
  const [commentList, setCommentList] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    let data = productId;
    getCommentOfProduct((isOk, data) => {
      if (!isOk) return toast.warning(data.message);
      setCommentList(data);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className={classes.root}>
        <SingleComment commentList={commentList} />
        <ReplyComment />
      </div>
    </>
  );
};

export default Comment;
