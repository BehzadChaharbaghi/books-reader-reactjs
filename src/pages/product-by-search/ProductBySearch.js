import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { toast } from "material-react-toastify";
import { Link } from "react-router-dom";
import { getProductBySearch } from "../../api/api_content";
import Loading from "../../components/Loading/Loading";

const ProductByCategory = (props) => {
  const classes = useStyles();
  const [isLoading, setLoading] = useState(true);
  const [query, setQuery] = useState();
  const [product, setProduct] = useState([1]);

  useEffect(async () => {
    await setQuery(props.location.state);
    let data = query;
    await getProductBySearch((isOk, data) => {
      if (!isOk) return toast.warning(data.message);
      setProduct(data);
      setLoading(false);
    });
  }, []);

  const products = product.map((item) => {
    return (
      <>
        <Typography>`جستجو برای: ${query}`</Typography>
        <Link to={`${item.id}`} className={classes.link}>
          <Grid key={item.id} className={classes.imageContainer} item xs={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia className={classes.media} image={`${item.pic}`} />
                <section className={classes.containerContent}>
                  <Typography
                    className={classes.title}
                    variant="body1"
                    component="h4"
                  >
                    {item.title}
                  </Typography>
                  <section className={classes.lineCenter}>
                    <h5 className={classes.author}>{item.authorsName}</h5>
                    <Typography
                      variant={"subtitle2"}
                      component={"h6"}
                      className={classes.badge}
                    >
                      {item.rateValue}
                    </Typography>
                  </section>
                  <section className={classes.lastLine}>
                    <h4>قیمت:</h4>
                    <Typography
                      variant={"subtitle1"}
                      component={"h6"}
                      className={classes.price}
                    >
                      {item.productPrice}
                    </Typography>
                  </section>
                </section>
              </CardActionArea>
            </Card>
          </Grid>
        </Link>
      </>
    );
  });

  // if (isLoading) {
  //   return <Loading />;
  // }

  return (
    <div className={classes.root}>
      <Grid className={classes.container} spacing={1} container>
        {products}
      </Grid>
    </div>
  );
};

export default ProductByCategory;
