import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import { Button, Grid } from "@material-ui/core";
import { toast } from "material-react-toastify";
import CardProduct from "../../../../../../components/card-product/CardProduct";

const MyBooksList = () => {
  const classes = useStyles();
  const [books, setBooks] = useState([]);
  const [isLoading, setLoading] = useState(true);

  //ketabhaye kharidari shode:
  // useEffect(() => {
  //   getMoreSection((isOk, data) => {
  //     if (!isOk) return toast.warning(data.message);
  //     setBooks(data);
  //     setLoading(false);
  //   });
  // }, []);
  //
  // if (isLoading) {
  //   return <Loading />;
  // }

  return (
    <div>
      <Grid container>
        <Grid container item xs={12}>
          <Grid item>
            <Button>آفلاین شده</Button>
          </Grid>
          <Grid item>
            <Button>کتاب های من</Button>
          </Grid>
          <Grid item>
            <Button>نشان شده</Button>
          </Grid>
        </Grid>

        {books.map((item) => {
          return (
            <>
              <CardProduct item={item} />
            </>
          );
        })}
      </Grid>
    </div>
  );
};

export default MyBooksList;
