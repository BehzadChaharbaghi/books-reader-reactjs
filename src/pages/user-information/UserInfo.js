import React from "react";
import useStyles from "./styles";
import { Grid, Typography } from "@material-ui/core";
import UserImage from "./components/user-image/UserImage";
import Inputs from "./components/inputs/Inputs";

const UserInfo = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} className={classes.title}>
          <Typography variant={"h6"} component={"h3"}>
            ویرایش کاربری
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <UserImage />
        </Grid>
        <Grid item xs={12}>
          <Inputs />
        </Grid>
      </Grid>
    </div>
  );
};

export default UserInfo;
