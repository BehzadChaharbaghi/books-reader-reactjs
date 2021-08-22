import React, { useState } from "react";
import useStyles from "./styles";
import { IconButton, Typography } from "@material-ui/core";
import { removeProductInOrder } from "../../../../api/api_content";
import { toast } from "material-react-toastify";
import RateStarValue from "../../../../components/rate-star/rateStarValue/RateStarValue";
import RateStarView from "../../../../components/rate-star/rateStarView/RateStarView";

const Items = ({ items }) => {
  const classes = useStyles();

  const handleRemoveItem = (productId) => {
    removeProductInOrder((isOk, productId) => {
      if (!isOk) return toast.warning(productId.message);
      toast.error("محصول از سبد خرید حذف شد");
    });
  };

  return (
    <div className={classes.root}>
      <li key={items.id}>
        <section className={classes.container}>
          <IconButton
            className={classes.closeIco}
            onClick={() => handleRemoveItem(items.id)}
          >
            &#10006;
          </IconButton>
          <img className={classes.img} src={`${items.pic}`} />
          <section>
            <Typography variant="h5" component="h4">
              {items.title}
            </Typography>
            <section>
              <Typography
                className={classes.text}
                variant="body1"
                component="h5"
              >
                نویسنده: {items.auther}
              </Typography>
              <Typography variant="body1" component="h5">
                ناشر: {items.publisher}
              </Typography>
            </section>
            <section>
              <RateStarView items={items} />
            </section>
          </section>
        </section>
      </li>
    </div>
  );
};

export default Items;
