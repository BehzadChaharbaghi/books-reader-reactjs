import React, { useState } from "react";
import useStyles from "./styles";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import Input from "@material-ui/core/Input";
import { IconButton, InputAdornment } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import ProductBySearch from "../../pages/product-by-search/ProductBySearch";

const Search = () => {
  const classes = useStyles();
  const [toggle, setToggle] = useState(false);
  const [query, setQuery] = useState();
  const history = useHistory();

  const handleOpenInput = async () => {
    // const icon = document.querySelector(`#justIcon`);
    // icon.style.opacity = "2";
    await setToggle(true);
  };
  const handleCloseInput = async () => {
    await setToggle(false);
    // setTimeout(() => setToggle(false), 400);
  };
  const handleSearchPage = () => {
    history.push({
      pathname: `/ProductBySearch/${query}`,
      state: query,
    });
  };

  return (
    <>
      <section className={classes.root}>
        {!toggle && (
          <IconButton
            id={"justIcon"}
            className={classes.btn}
            onClick={handleOpenInput}
          >
            <SearchOutlinedIcon />
          </IconButton>
        )}
        {toggle && (
          <Input
            id={"input"}
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            className={classes.searchInput}
            placeholder={"جستجو..."}
            disableUnderline
            startAdornment={
              <InputAdornment position="end">
                <IconButton className={classes.btn} onClick={handleCloseInput}>
                  <CloseOutlinedIcon />
                </IconButton>
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton className={classes.btn} onClick={handleSearchPage}>
                  <SearchOutlinedIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        )}
      </section>
    </>
  );
};

export default Search;
