import React, { useRef, useState } from "react";
import useStyles from "./styles";
import { Button, Grid, IconButton } from "@material-ui/core";
import { uploadUserPhoto } from "../../../../../api/api_content";
import { toast } from "material-react-toastify";

const BtnImage = () => {
  const classes = useStyles();
  const [imagePath, setImagePath] = useState();
  const [imageFile, setImageFile] = useState();
  const [anchorMenu, setAnchorMenu] = useState();
  const inputRef = useRef();

  const handleAvatar = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImageFile(e.target.files[0]);

      //Baraye neshan dadan pishnamayesh avatar dar samte chap:
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePath(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);

      //Upload Axe dar server:
      const formData = new FormData();
      formData.append("image", e.target.files[0]);

      uploadUserPhoto(formData, (isOk, data) => {
        if (!isOk) return toast.error(data);
        toast.success("عکس شما با موفقیت در سرور ذخیره شد");
        localStorage.setItem("image", data.imagePath);
      });
    }
  };

  const handleToggleMenu = (e) => {
    if (anchorMenu) setAnchorMenu(null);
    else setAnchorMenu(e.currentTarget);
  };

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <Button variant={"outlined"}>حذف تصویر پروفایل</Button>
        </Grid>
        <Grid item xs={12} sm={4}>
          <section>
            <Button
              variant={"outlined"}
              onClick={() => {
                inputRef.current.click();
              }}
            >
              تغییر تصویر
            </Button>
            <input ref={inputRef} type={"file"} onChange={handleAvatar} />
          </section>
        </Grid>
        <Grid item xs={12} sm={4}>
          <IconButton>&#10006;</IconButton>
        </Grid>
      </Grid>
    </div>
  );
};

export default BtnImage;
