import React, { useState } from "react";
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
import { toast } from "react-toastify";

const Auth = (props) => {
  // {Switch between tab}
  const LOGIN_TAB_VALUE = 1;
  const REG_TAB_VALUE = 2;
  const FORGOT_PASSWORD = 3;
  const [tab, setTab] = useState(REG_TAB_VALUE);
  // {State}
  const [openPopup, setOpenPopup] = useState(false);
  //Register state
  const [nameRegister, setNameRegister] = useState();
  const [lastNameRegister, setLastNameRegister] = useState();
  const [mobileRegister, setMobileRegister] = useState();
  const [passwordRegister, setPasswordRegister] = useState();
  const [confpasswordRegister, setConfPasswordRegister] = useState();

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
    if (!user.name) return console.log("name nist");
    if (!user.family) return toast.warn("نام خانوادگی خودتون رو وارد کنید");
    if (!user.mobile) return toast.warn("باید حتما شماره موبایل وارد بشه!");
    if (!user.password) return toast.warn("باید حتما پسورد وارد بشه!");
    if (user.password !== user.confPassword)
      return toast.warn("تکرار رمز با رمز اولیه همخوانی ندارد");
  };
  const handleRegister = () => {
    const user = {
      name: nameRegister,
      family: lastNameRegister,
      mobile: mobileRegister,
      password: passwordRegister,
      confPassword: confpasswordRegister,
    };
    const error = validateRegister(user);
    if (error) {
      return toast.warn(error);
    }
    user.confPassword = undefined;

    // registerApi(user, (isOk, data) => {
    //   if (!isOk) return toast.error(data);
    toast.success("ثبت نام شما با موفقیت انجام شد");
    // localStorage.setItem("name", data.name);
    // localStorage.setItem("image", data.image);
    // localStorage.setItem("username", data.username);
    // localStorage.setItem("x-auth-token", data["x-auth-token"]);
    // window.location.reload();
  };

  const classes = useStyles();
  return (
    <form>
      <Dialog className={classes.root} open={props.openPopup}>
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
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <Input
                  className={classes.input}
                  type="password"
                  autoComplete={"password"}
                  placeholder={"رمز عبور"}
                  InputLabelProps={{}}
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
                href={"#"}
                className={classes.btn}
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
                  onChange={(e) => setMobileRegister(e.target.value)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <Input
                  className={classes.input}
                  type="password"
                  placeholder={"رمز عبور"}
                  onChange={(e) => setPasswordRegister(e.target.value)}
                />
                <Input
                  className={classes.input}
                  type="password"
                  placeholder={"تکرار رمز عبور"}
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
    </form>
  );
};

export default Auth;
