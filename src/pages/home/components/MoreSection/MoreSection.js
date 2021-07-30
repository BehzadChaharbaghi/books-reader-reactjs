import React, { useEffect } from "react";
import useStyles from "./styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { getMoreSection } from "../../../../api/api_content";
import { toast } from "react-toastify";

const MoreSection = () => {
  const classes = useStyles();
  const [text, setText] = [];

  // useEffect(() => {
  //   getMoreSection((isOk, data) => {
  //     if (!isOk) return toast.warn(data.message);
  //     console.log(data);
  //     // else setText(data);
  //   });
  // }, []);
  console.log(text);
  return (
    <div className={classes.root}>
      <Typography variant={"h4"} component={"h1"}>
        بیشترین پخش ها
      </Typography>
      <section className={classes.container}>
        {/*{text.map((item) => {*/}
        {/*  return (*/}
        {/*    <>*/}
        {/*      <Card className={classes.card}>*/}
        {/*        <CardActionArea>*/}
        {/*          <CardMedia*/}
        {/*            className={classes.media}*/}
        {/*            image={`${item.imageUrl}`}*/}
        {/*          />*/}
        {/*          <Typography*/}
        {/*            className={classes.title}*/}
        {/*            variant="subtitle1"*/}
        {/*            component="h6"*/}
        {/*          >*/}
        {/*            {item.title}*/}
        {/*          </Typography>*/}
        {/*        </CardActionArea>*/}
        {/*      </Card>*/}
        {/*    </>*/}
        {/*  );*/}
        {/*})}*/}
      </section>
    </div>
  );
};

export default MoreSection;
