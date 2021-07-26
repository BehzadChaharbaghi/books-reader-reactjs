import React from "react";
import useStyles from "./styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

const MoreSection = () => {
  const classes = useStyles();
  const text = [
    {
      imageUrl: "/images/book1.jpg",
      title: "باشگاه 5 صبحی ها",
    },
    {
      imageUrl: "/images/book2.jpg",
      title: "استرينگ كست",
    },
    {
      imageUrl: "/images/book1.jpg",
      title: "من پیش از تو",
    },
    {
      imageUrl: "/images/book2.jpg",
      title: "کتاب راهبی که فراری اش را فروخت",
    },
  ];
  return (
    <div className={classes.root}>
      <Typography variant={"h4"} component={"h1"}>
        بیشترین پخش ها
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
                    variant="subtitle1"
                    component="h6"
                  >
                    {item.title}
                  </Typography>
                </CardActionArea>
              </Card>
            </>
          );
        })}
      </section>
    </div>
  );
};

export default MoreSection;
