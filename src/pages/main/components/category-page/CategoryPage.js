import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import { Grid, Card, CardActionArea, CardMedia } from "@material-ui/core";
import { getCategoryTitle } from "../../../../api/api_content";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { toast } from "material-react-toastify";
import { Link } from "react-router-dom";
import Loading from "../../../../components/Loading/Loading";

const CategoryPage = () => {
  const classes = useStyles();
  const [isLoading, setLoading] = useState(true);
  const [categoryTitle, setCategoryTitle] = useState([]);

  useEffect(() => {
    getCategoryTitle((isOk, data) => {
      if (!isOk) return toast.warning(data.message);
      setCategoryTitle(data);
      setLoading(false);
    });
  }, []);

  const titles = categoryTitle.map((item) => {
    return (
      <Link to={`${item.id}`} className={classes.link}>
        <Grid
          key={item.id}
          className={classes.imageContainer}
          item
          xs={12}
          sm={4}
        >
          <Card>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={`${item.pic}`}
                title="image"
              />
              <h1 className={classes.textImg}>{item.title}</h1>
            </CardActionArea>
          </Card>
        </Grid>
      </Link>
    );
    {
      /*<Grid className={classes.imageContainer} item xs={12}>*/
    }
    {
      /*  <Card>*/
    }
    {
      /*    <CardActionArea>*/
    }
    {
      /*      <CardMedia*/
    }
    {
      /*        className={classes.mediaCenter}*/
    }
    {
      /*        image={item.imageUrl}*/
    }
    {
      /*        title="image"*/
    }
    {
      /*      />*/
    }
    {
      /*      <section className={classes.textPodcast}>*/
    }
    {
      /*        <h1>{item.title}</h1>*/
    }
    {
      /*        <PlayArrowIcon />*/
    }
    {
      /*      </section>*/
    }
    {
      /*    </CardActionArea>*/
    }
    {
      /*  </Card>*/
    }
    {
      /*</Grid>*/
    }
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={classes.root}>
      <Grid className={classes.container} spacing={1} container>
        {titles}
      </Grid>
    </div>
  );
};

export default CategoryPage;
