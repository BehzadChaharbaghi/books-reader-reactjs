import React, { useEffect, useRef, useState } from "react";
import useStyles from "./styles";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Input,
  Typography,
} from "@material-ui/core";
import ReportProblemOutlinedIcon from "@material-ui/icons/ReportProblemOutlined";
import Loading from "../../components/Loading/Loading";
import { toast } from "material-react-toastify";
import { loginApi, registerApi } from "../../api/api_auth";

let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current && !!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};
const Auth = (props) => {
  // {Switch between tab}
  const LOGIN_TAB_VALUE = 1;
  const REG_TAB_VALUE = 2;
  const FORGOT_PASSWORD = 3;
  const [tab, setTab] = useState(REG_TAB_VALUE);
  // {State}
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  //Register state
  const [nameRegister, setNameRegister] = useState();
  const [lastNameRegister, setLastNameRegister] = useState();
  const [mobileRegister, setMobileRegister] = useState();
  const [passwordRegister, setPasswordRegister] = useState();
  const [confpasswordRegister, setConfPasswordRegister] = useState();
  //login state
  const [mobileLogin, setMobileLogin] = useState();
  const [passwordLogin, setPasswordLogin] = useState();

  // {Function}
  const handleTabs = (value) => {
    setTab(value);
  };
  //Validate
  const validateLogin = (user) => {
    if (!user.username) return "نام کاربری فراموش نشه";
    if (!user.password) return "باید حتما پسورد وارد بشه";
  };

  const validateRegister = (user) => {
    // if (!user.name) return "نام خودتون رو وارد کنید";
    // if (!user.family) return "نام خانوادگی خودتون رو وارد کنید";
    if (!user.UserName) return "باید حتما شماره موبایل وارد بشه!";
    if (!user.Password) return "باید حتما پسورد وارد بشه!";
    // if (user.Password !== user.confPassword)
    //   return "تکرار رمز با رمز اولیه همخوانی ندارد";
  };

  // Register Controller
  const handleRegister = () => {
    const user = {
      // name: nameRegister,
      // family: lastNameRegister,
      UserName: mobileRegister,
      Password: passwordRegister,
      // confPassword: confpasswordRegister,
    };
    const error = validateRegister(user);
    if (error) return toast.warning(error);
    // user.confPassword = undefined;
    console.log(user);
    registerApi(user, (isOk, data) => {
      if (!isOk) return toast.error(data);

      toast.success("ثبت نام شما با موفقیت انجام شد");
      // localStorage.setItem("UserName", data.UserName);
      // // localStorage.setItem("image", data.image);
      // localStorage.setItem("Password", data.Password);
      // localStorage.setItem("token", data["token"]);
      window.location.reload();
    });
  };
  // Login Controller
  const handleLogin = () => {
    console.log(mobileLogin);
    console.log(passwordLogin);
    const user = {
      username: mobileLogin,
      password: passwordLogin,
    };
    const error = validateLogin(user);
    if (error) return toast.warning(error);

    loginApi(user, (isOk, data) => {
      if (!isOk) return toast.error(data);
      // login success & set localStorage browser
      toast.success("شما با موفقیت وارد شدید");
      localStorage.setItem("username", data.userName);
      localStorage.setItem("userId", data.userId);
      localStorage.setItem("token", data["token"]);
      window.location.reload();
    });
  };

  const classes = useStyles();

  useEffect(() => {
    setIsOpen(props.isOpen);
    setIsLoading(false);
  }, []);

  let domNode = useClickOutside(() => {
    setIsOpen(false);
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Dialog
      ref={domNode}
      className={classes.root}
      TransitionComponent={"fade"}
      open={isOpen}
    >
      {/*{Login}*/}
      {tab === LOGIN_TAB_VALUE && (
        <>
          <section className={classes.container}>
            <Typography variant={"subtitle1"} component={"h3"}>
              ورود به حساب کاربری
            </Typography>
            <DialogContent className={classes.loginInfoSection}>
              <Input
                className={classes.input}
                type="tel"
                placeholder={"موبایل"}
                value={mobileLogin}
                onChange={(e) => setMobileLogin(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Input
                className={classes.input}
                type="password"
                autoComplete={"password"}
                placeholder={"رمز عبور"}
                value={passwordLogin}
                onChange={(e) => setPasswordLogin(e.target.value)}
              />
              <Typography className={classes.textSection} variant={"body1"}>
                <ReportProblemOutlinedIcon className={classes.icon} />
                رمز عبور خود را فراموش کرده اید؟
                <a
                  onClick={() => handleTabs(FORGOT_PASSWORD)}
                  className={classes.clickText}
                >
                  کلیک کنید
                </a>
              </Typography>
            </DialogContent>
          </section>
          <DialogActions className={classes.btnSection}>
            <Button
              variant="contained"
              color="primary"
              className={classes.btn}
              onClick={handleLogin}
            >
              ورود
            </Button>
            <Button
              variant="outlined"
              color="primary"
              href={"#"}
              className={classes.btn}
              onClick={() => handleTabs(REG_TAB_VALUE)}
            >
              ثبت نام
            </Button>
          </DialogActions>
        </>
      )}
      {/*{Forgot_Password}*/}
      {tab === FORGOT_PASSWORD && (
        <>
          <section className={classes.container}>
            <Typography variant={"subtitle1"} component={"h3"}>
              فراموشی کلمه عبور
            </Typography>
            <DialogContent className={classes.forgetPassSection}>
              <Input
                className={classes.input}
                type="tel"
                placeholder={"موبایل"}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </DialogContent>
          </section>
          <DialogActions className={classes.btnSection}>
            <Button
              variant="contained"
              color="primary"
              href={"#"}
              className={classes.btn}
            >
              ارسال کد
            </Button>
            <Button
              variant="outlined"
              color="primary"
              // href={"#"}
              className={classes.btn}
              onClick={() => handleTabs(LOGIN_TAB_VALUE)}
            >
              بازگشت
            </Button>
          </DialogActions>
        </>
      )}
      {/*{Register}*/}
      {tab === REG_TAB_VALUE && (
        <>
          <section className={classes.container}>
            <Typography variant={"subtitle1"} component={"h3"}>
              ساخت حساب جدید
            </Typography>
            <DialogContent className={classes.registerInfoSection}>
              <Input
                className={classes.input}
                type="text"
                placeholder={"نام"}
                disableUnderline={true}
                value={nameRegister}
                onChange={(e) => setNameRegister(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                  className: classes.textInput,
                }}
              />
              <Input
                className={classes.input}
                disableUnderline={true}
                type="text"
                placeholder={"نام خانوادگی"}
                value={lastNameRegister}
                onChange={(e) => setLastNameRegister(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                  className: classes.textInput,
                }}
              />
              <Input
                className={classes.input}
                type="tel"
                placeholder={"موبایل"}
                value={mobileRegister}
                onChange={(e) => setMobileRegister(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Input
                className={classes.input}
                type="password"
                placeholder={"رمز عبور"}
                value={passwordRegister}
                onChange={(e) => setPasswordRegister(e.target.value)}
              />
              <Input
                className={classes.input}
                type="password"
                placeholder={"تکرار رمز عبور"}
                value={confpasswordRegister}
                onChange={(e) => setConfPasswordRegister(e.target.value)}
              />
              <Typography className={classes.textSection} variant={"body1"}>
                <ReportProblemOutlinedIcon className={classes.icon} />
                <span href={"#"} className={classes.clickText}>
                  بخاطر سپردن رمز عبور
                </span>
              </Typography>
            </DialogContent>
          </section>
          <DialogActions className={classes.btnSection}>
            <Button
              variant="outlined"
              color="primary"
              href={"#"}
              className={classes.btn}
              onClick={() => handleTabs(LOGIN_TAB_VALUE)}
            >
              ورود
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.btn}
              onClick={handleRegister}
            >
              ثبت نام
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
};

export default Auth;
