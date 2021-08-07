import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import { Grid } from "@material-ui/core";
import { toast } from "material-react-toastify";
import CardProduct from "../../../../../../components/card-product/CardProduct";
import Loading from "../../../../../../components/Loading/Loading";
import { getMoreSection } from "../../../../../../api/api_content";

const OfflineList = () => {
  const classes = useStyles();
  const [books, setBooks] = useState([]);
  const [isLoading, setLoading] = useState(true);

  // ketabhaye kharidari shode:
  useEffect(() => {
    getMoreSection((isOk, data) => {
      if (!isOk) return toast.warning(data.message);
      setBooks(data);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid
          container
          item
          justifyContent={"center"}
          className={classes.cardContainer}
        >
          {books.map((item) => {
            return (
              <>
                <CardProduct item={item} />
              </>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
};

export default OfflineList;
