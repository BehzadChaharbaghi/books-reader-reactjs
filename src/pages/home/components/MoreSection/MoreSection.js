import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { getMoreSection } from "../../../../api/api_content";
import ReactLoading from "react-loading";
import { toast } from "react-toastify";

const MoreSection = () => {
  const classes = useStyles();
  const [text, setText] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getMoreSection((isOk, data) => {
      if (!isOk) return toast.warn(data.message);
      setText(data);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div className={classes.loading}>
        <ReactLoading type={"bars"} height={"5rem"} width={"5rem"} />
      </div>
    );
  }

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
