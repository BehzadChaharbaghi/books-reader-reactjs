import React from "react";
import useStyles from "./styles";
import { Grid, Paper, Typography } from "@material-ui/core";

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
      <section className={classes.container}>
        {text.map((item) => {
          return (
            <>
              <Paper className={classes.paper}>
                <img src={`${item.imageUrl}`} />
                <section className={classes.typography}>
                  <Typography
                    className={classes.title}
                    variant={"h6"}
                    component={"h4"}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    className={classes.desc}
                    variant={"body2"}
                    component={"h4"}
                  >
                    {item.desc}
                  </Typography>
                </section>
              </Paper>
            </>
          );
        })}
      </section>
    </div>
  );
};

export default ServicesSite;
