import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardActionArea, CardMedia, Typography } from "@material-ui/core";
import useStyles from "./styles";
import Loading from "../Loading/Loading";

const CardProduct = ({ item }) => {
  const classes = useStyles();

  // const [items, setItems] = useState([]);
  // const [isLoading, setLoading] = useState(true);
  //
  // useEffect(() => {
  //   setItems(item);
  //   setLoading(false);
  // }, []);
  //
  // if (isLoading) {
  //   return <Loading />;
  // }
  console.log(item);
  return (
    <Card className={classes.card}>
      <Link to={"/BookDetail/" + item.id}>
        <CardActionArea>
          <CardMedia className={classes.media} image={`${item.imageUrl}`} />
          <Typography
            className={classes.title}
            variant="subtitle1"
            component="h6"
          >
            {item.title}
          </Typography>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default CardProduct;
