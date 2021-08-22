import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import { Grid, Card, CardActionArea, CardMedia } from "@material-ui/core";
import { getProductCategorie } from "../../../../api/api_content";
import ReactLoading from "react-loading";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { toast } from "material-react-toastify";

const AudioBook = () => {
  const classes = useStyles();
  const [categorie, setCategorie] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getProductCategorie((isOk, data) => {
      if (!isOk) return toast.warning(data.message);
      setCategorie(data);
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
      <Grid className={classes.container} spacing={1} container>
        {[0, 1, 2, 3, 4, 5].map((item) => (
          <Grid
            key={item}
            className={classes.imageContainer}
            item
            xs={12}
            sm={4}
          >
            <Card>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={categorie[0].imageUrl}
                  title="image"
                />
                <h1 className={classes.textImg}>{categorie[0].title}</h1>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
        <Grid className={classes.imageContainer} item xs={12}>
          <Card>
            <CardActionArea>
              <CardMedia
                className={classes.mediaCenter}
                image={categorie[1].imageUrl}
                title="image"
              />
              <section className={classes.textPodcast}>
                <h1>{categorie[1].title}</h1>
                <PlayArrowIcon />
              </section>
            </CardActionArea>
          </Card>
        </Grid>
        {[0, 1, 2].map((item) => (
          <Grid
            key={item}
            className={classes.imageContainer}
            item
            xs={12}
            sm={4}
          >
            <Card>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={categorie[0].imageUrl}
                  title="image"
                />
                <h1 className={classes.textImg}>{categorie[0].title}</h1>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AudioBook;
