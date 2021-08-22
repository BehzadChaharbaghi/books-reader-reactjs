import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import { Rating } from "react-simple-star-rating";
import useStyles from "./styles";
import Loading from "../../Loading/Loading";
import { toast } from "material-react-toastify";
import { postRateByProductId } from "../../../api/api_content";

const RateStarValue = ({ items }) => {
  const classes = useStyles();
  const [rating, setRating] = useState(0);
  const [isLoading, setLoading] = useState(true);

  const handleRating = (rate) => {
    // postRateByProductId(rate, (isOk, data) => {
    //   if (!isOk) return toast.error(data);
    toast.success("امتیاز شما با موفقیت ثبت شد");
    // });
  };

  // useEffect(() => {
  //   setRating(items.rateValue);
  //   setLoading(false);
  // }, [rating]);
  //
  // if (isLoading) {
  //   return <Loading />;
  // }

  return (
    <div>
      <section className={classes.icoStar}>
        {/*<Typography variant={"subtitle2"} component={"h6"}>*/}
        {/*  ({items.rateValue})رای*/}
        {/*</Typography>*/}
        {/*<Typography*/}
        {/*  style={{ margin: "0 8px" }}*/}
        {/*  variant={"subtitle2"}*/}
        {/*  component={"h6"}*/}
        {/*>*/}
        {/*  {rating}*/}
        {/*</Typography>*/}
        <Rating
          onClick={handleRating}
          transition
          // size={20}
          stars={5}
        />
      </section>
    </div>
  );
};

export default RateStarValue;
