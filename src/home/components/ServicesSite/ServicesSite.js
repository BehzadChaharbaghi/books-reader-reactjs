import React from "react";
import useStyles from "./styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";

const ServicesSite = () => {
  const classes = useStyles();
  const text = [
    {
      imageUrl: "/images/XMLID_81_.png",
      title: "تهیه و اشتراک پادکست",
      desc: "شما میتوانید با تولید پادکست و کتاب صوتی و اشتراک آن در بین هزاران کاربر تاک کسب درآمد کنید",
    },
    {
      imageUrl: "/images/headphones (1).png",
      title: "در هر زمان و مکان گوش دهید",
      desc: "با استفاده از سایت و اپلیکیشن تاک میتوانید در هر زمان و مکان پادکست و کتاب صوتی مورد علاقه خود را گوش کنید",
    },
    {
      imageUrl: "/images/tax-free.png",
      title: "رایگان گوش کنید",
      desc: "هزاران پادکست و کتاب صوتی را رایگان گوش کنید",
    },
    {
      imageUrl: "/images/fireworks (1).png",
      title: "ساعتها سرگرمی مفید",
      desc: "ساعت ها سرگرمی علمی و مفید را تجربه کنید",
    },
  ];
  return (
    <div className={classes.root}>
      {text.map((item) => {
        return (
          <>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={item.imageUrl}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </>
        );
      })}
    </div>
  );
};

export default ServicesSite;
