import React from "react";
import useStyles from "./styles";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

const FreeSection = () => {
  const classes = useStyles();
  const text = [
    {
      imageUrl: "/images/book1.jpg",
      title: "باشگاه 5 صبحی ها",
      author: "برایان ترسی",
      score: 10,
      price: "رایگان",
    },
    {
      imageUrl: "/images/book2.jpg",
      title: "استرينگ كست",
      author: "فئودور دایستیافوسکی",
      score: 10,
      price: "رایگان",
    },
    {
      imageUrl: "/images/book1.jpg",
      title: "من پیش از تو",
      author: "برایان ترسی",
      score: 5.5,
      price: "رایگان",
    },
    {
      imageUrl: "/images/book2.jpg",
      title: "کتاب راهبی که فراری اش را فروخت",
      author: "فئودور دایستیافوسکی",
      score: 10,
      price: "رایگان",
    },
    {
      imageUrl: "/images/book2.jpg",
      title: "کتاب راهبی که فراری اش را فروخت",
      author: "برایان ترسی",
      score: 5.5,
      price: "4500 تومان",
    },
    {
      imageUrl: "/images/book2.jpg",
      title: "کتاب راهبی که فراری اش را فروخت",
      author: "فئودور دایستیافوسکی",
      score: 10,
      price: "رایگان",
    },
  ];

  return (
    <div className={classes.root}>
      <Typography variant={"h4"} component={"h1"}>
        رایگان های تاک
      </Typography>
      <section className={classes.container}>
        {text.map((item) => {
          return (
            <>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={`${item.imageUrl}`}
                  />
                  <Typography
                    className={classes.title}
                    variant="body1"
                    component="h4"
                  >
                    {item.title}
                  </Typography>
                  <section className={classes.lineCenter}>
                    <h5 className={classes.author}>{item.author}</h5>
                    <Typography
                      variant={"subtitle2"}
                      component={"h6"}
                      className={classes.badge}
                    >
                      {item.score}
                    </Typography>
                  </section>
                  <section className={classes.lastLine}>
                    <h4>قیمت:</h4>
                    <Typography
                      variant={"subtitle1"}
                      component={"h6"}
                      className={classes.price}
                    >
                      {item.price}
                    </Typography>
                  </section>
                </CardActionArea>
                {/*<CardActions>*/}
                {/*  <Button size="small" color="primary">*/}
                {/*    Share*/}
                {/*  </Button>*/}
                {/*</CardActions>*/}
              </Card>
            </>
          );
        })}
      </section>
    </div>
  );
};

export default FreeSection;
