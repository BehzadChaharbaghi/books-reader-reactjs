import React, { useCallback, useEffect, useState } from "react";
import { Button, Grid } from "@material-ui/core";
import { getMoreSection } from "../../../../api/api_content";
import { toast } from "material-react-toastify";
import Loading from "../../../../components/Loading/Loading";
import useStyles from "./styles";
import MyBooksList from "./components/my-books-list/MyBooksList";
import OffilineList from "./components/offline-list/OffilineList";
import BookMarkList from "./components/bookmark-list/BookMarkList";

const MyLibrary = () => {
  let initialState = {
    first: false,
    second: false,
    third: false,
  };

  const classes = useStyles();
  const [books, setBooks] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [buttonId, setButtonId] = useState(0);
  const [btnClick, setBtnClick] = useState(initialState);

  const handleClick = useCallback(
    (name) => (event) => {
      const newState = Object.assign({}, initialState);
      switch (name) {
        case "first":
          newState.first = true;
          break;
        case "second":
          newState.second = true;
          break;
        case "third":
          newState.third = true;
          break;
        default:
          break;
      }
      //Update button variant
      setBtnClick(newState);
    },
    [setBtnClick]
  );

  //ketabhaye kharidari shode:
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
          className={classes.btnSection}
          container
          item
          xs={12}
          justifyContent={"center"}
          spacing={1}
        >
          <Grid item>
            <Button
              variant={btnClick.first ? "contained" : "outlined"}
              color={"primary"}
              onClick={handleClick("first")}
            >
              آفلاین شده
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant={btnClick.second ? "contained" : "outlined"}
              color={"primary"}
              onClick={handleClick("second")}
            >
              کتاب های من
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant={btnClick.third ? "contained" : "outlined"}
              color={"primary"}
              onClick={handleClick("third")}
            >
              نشان شده
            </Button>
          </Grid>
        </Grid>
        <Grid container item>
          {btnClick.first && <OffilineList />}
          {btnClick.second && <MyBooksList />}
          {btnClick.third && <BookMarkList />}
        </Grid>
      </Grid>
    </div>
  );
};

export default MyLibrary;
