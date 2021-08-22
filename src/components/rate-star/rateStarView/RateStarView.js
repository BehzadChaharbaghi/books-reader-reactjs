import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import { RatingView } from "react-simple-star-rating";
import useStyles from "./styles";
import Loading from "../../Loading/Loading";

const RateStarView = ({ items }) => {
  const classes = useStyles();
  const [rating, setRating] = useState(0);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setRating(items.rateValue);
    setLoading(false);
  }, [rating]);

  if (isLoading) {
    return <Loading />;
  }
  console.log("stars", rating);
  return (
    <div>
      <section className={classes.icoStar}>
        <Typography variant={"subtitle2"} component={"h6"}>
          ({items.rateValue})رای
        </Typography>
        <Typography
          style={{ margin: "0 8px" }}
          variant={"subtitle2"}
          component={"h6"}
        >
          {rating}
        </Typography>
        <RatingView ratingValue={rating} transition stars={5} />
      </section>
    </div>
  );
};

export default RateStarView;
