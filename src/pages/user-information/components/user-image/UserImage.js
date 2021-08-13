import React, { useRef, useState } from "react";
import useStyles from "./styles";
import { Fade, Grid, Menu, MenuItem, Typography } from "@material-ui/core";
import { uploadUserPhoto } from "../../../../api/api_content";
import { toast } from "material-react-toastify";
import BtnImage from "./buttons/BtnImage";

const UserImage = () => {
  const classes = useStyles();
  const [imagePath, setImagePath] = useState();

  // {handle avatar image}
  const getImage = () => {
    if (imagePath) return imagePath;
    if (
      localStorage.getItem("image") &&
      localStorage.getItem("image") !== "undefined"
    )
      return localStorage.getItem("image");
    return "/images/add-avatar.png";
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <img className={classes.imgProfile} src={getImage()} />
        </Grid>
        <Grid item xs={12} sm={8}>
          <BtnImage />
        </Grid>
      </Grid>
    </div>
  );
};

export default UserImage;
