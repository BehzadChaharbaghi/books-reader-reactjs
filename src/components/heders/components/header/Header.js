import React, { useRef, useState } from "react";
import useStyles from "./styles";
import {
  AppBar,
  Button,
  Fade,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import "material-react-toastify/dist/ReactToastify.css";
import MicNoneIcon from "@material-ui/icons/MicNoneOutlined";
import ImportContactsIcon from "@material-ui/icons/ImportContactsOutlined";
import GroupWorkIcon from "@material-ui/icons/GroupWorkOutlined";
import LocalPharmacyOutlinedIcon from "@material-ui/icons/LocalPharmacyOutlined";
import { uploadUserPhoto } from "../../../../api/api_content";
import { toast } from "material-react-toastify";

const Header = () => {
  const classes = useStyles();
  const isLogin = () => !!localStorage.getItem("token");
  const [imagePath, setImagePath] = useState();
  const [imageFile, setImageFile] = useState();
  const [anchorMenu, setAnchorMenu] = useState();
  const inputRef = useRef();

  const pubTitles = [
    { title: "صفحه اصلی" },
    { title: "دانلود اپلیکیشن" },
    { title: "سوالات متداول" },
    { title: "درباره ما" },
  ];
  const loginTitles = [
    { title: "پادکست", icon: <MicNoneIcon /> },
    { title: "کتاب صوتی", icon: <ImportContactsIcon /> },
    { title: "سریال صوتی", icon: <GroupWorkIcon /> },
    { title: "کپسول", icon: <LocalPharmacyOutlinedIcon /> },
  ];

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
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          {!isLogin && (
            <>
              <nav className={classes.nav}>
                <IconButton
                  className={classes.logoBtn}
                  aria-label="logo picture"
                  component="span"
                >
                  <img
                    alt={"logo"}
                    className={classes.logoImg}
                    src={"/images/logo.png"}
                  />
                </IconButton>
                {pubTitles.map((item) => {
                  return (
                    <Button>
                      <Link className={classes.link} to={"/index"}>
                        <h3 className={classes.appbarTitle}>{item.title}</h3>
                      </Link>
                    </Button>
                  );
                })}
              </nav>
              <Button className={classes.btnLogin}>ورود / ثبت نام</Button>
            </>
          )}
          {isLogin && (
            <>
              <nav className={classes.navAfterLogin}>
                {loginTitles.map((item) => {
                  return (
                    <Button>
                      <Link className={classes.link} to={"/index"}>
                        <span className={classes.iconTitle}>{item.icon}</span>
                        <h3 className={classes.appbarTitle}>{item.title}</h3>
                      </Link>
                    </Button>
                  );
                })}
              </nav>
              <section
                className={classes.containerProfile}
                onClick={handleToggleMenu}
              >
                <img
                  alt={"profile"}
                  className={classes.imgProfile}
                  src={getImage()}
                />
                <section>
                  <Typography>{localStorage.getItem("username")}</Typography>
                  {/*<Typography>{localStorage.getItem("userId")}</Typography>*/}
                </section>
                <input ref={inputRef} type={"file"} onChange={handleAvatar} />
              </section>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Menu
        autoFocus={false}
        className={classes.menu}
        keepMounted
        open={Boolean(anchorMenu)}
        onClose={() => setAnchorMenu(null)}
        TransitionComponent={Fade}
        anchorEl={anchorMenu}
      >
        <MenuItem
          onClick={() => {
            inputRef.current.click();
          }}
        >
          ویرایش عکس پروفایل
        </MenuItem>
        <Link className={classes.linkMenu} to={"/UserInfo"}>
          <MenuItem onClick={() => {}}>ویرایش اطلاعات</MenuItem>
        </Link>
        <MenuItem
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
        >
          خروج
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Header;
