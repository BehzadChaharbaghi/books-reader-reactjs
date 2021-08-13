import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  NativeSelect,
  TextField,
} from "@material-ui/core";
import { toast } from "material-react-toastify";
import Axios from "axios";
import { getUserInfo, putUserInfo } from "../../../../api/api_content";

const Inputs = (props) => {
  const classes = useStyles();

  const [info, setInfo] = useState({});
  // const [gender, setGender] = React.useState();
  // const [date, setDate] = React.useState();
  const genderValue = [
    {
      value: " ",
      id: 0,
    },
    {
      value: "مرد",
      id: 1,
    },
    {
      value: "زن",
      id: 2,
    },
    {
      value: "نامشخص",
      id: 3,
    },
  ];
  const jobValue = [
    {
      value: " ",
      id: 0,
    },
    {
      value: "دانش آموز",
      id: 1,
    },
    {
      value: "دانشجو",
      id: 2,
    },
    {
      value: "کارمند",
      id: 3,
    },
    {
      value: "سایر",
      id: 4,
    },
  ];
  // const onHandleSelect = (e) => {
  //   setGender(e.target.value);
  // };

  const onSaveEdit = (data) => {
    putUserInfo(data, (isOk, data) => {
      if (!isOk) return toast.error(data);
      toast.success("اطلاعات با موفقیت ثبت شد...");
    });
    // window.location.reload();
  };

  const onBackPressed = () => {
    props.history.push("/index");
  };

  useEffect(() => {
    getUserInfo((isOk, data) => {
      if (!isOk) return toast.warning(data.message);
      setInfo(data);
    });
  }, []);

  const setInfoUser = (key, e) => {
    switch (key) {
      case "UserName":
        setInfo({ ...info, UserName: e.target.value });
        break;
      case "LastName":
        setInfo({ ...info, LastName: e.target.value });
        break;
      case "BirthDay":
        setInfo({ ...info, BirthDay: e.target.value });
        break;
      case "NationalCode":
        setInfo({ ...info, NationalCode: e.target.value });
        break;
      case "GenderType":
        setInfo({ ...info, GenderType: parseInt(e.target.value) });
        break;
      case "JobType":
        setInfo({ ...info, JobType: parseInt(e.target.value) });
        break;
      case "TelNum":
        setInfo({ ...info, TelNum: e.target.value });
        break;
      case "Email":
        setInfo({ ...info, Email: e.target.value });
        break;
      case "Password":
        setInfo({ ...info, Password: e.target.value });
        break;
    }
  };

  console.log(info);
  return (
    <div className={classes.root}>
      <Grid container spacing={2} className={classes.container}>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            required
            className={classes.input}
            placeholder="نام"
            type="text"
            value={info.UserName}
            onChange={(e) => {
              setInfoUser("UserName", e);
            }}
          />
          {/*<Input*/}
          {/*  className={classes.input}*/}
          {/*  type="text"*/}
          {/*  placeholder={""}*/}
          {/*  // value={}*/}
          {/*  // onChange={(e) => setMobileLogin(e.target.value)}*/}
          {/*  InputLabelProps={{*/}
          {/*    shrink: true,*/}
          {/*  }}*/}
          {/*/>*/}
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            className={classes.input}
            placeholder="نام خوانوادگی"
            type="text"
            value={info.LastName}
            onChange={(e) => {
              setInfoUser("LastName", e);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <DatePicker
            className={classes.dateInput}
            // value={date}
            calendar={persian}
            locale={persian_fa}
            calendarPosition="bottom-right"
            value={info.BirthDay}
            // onChange={(e) => {
            //   setInfoUser("BirthDay", e);
            // }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl align="right">
            <InputLabel>جنسیت</InputLabel>
            <NativeSelect
              className={classes.selectInput}
              value={info.GenderType}
              onChange={(e) => {
                setInfoUser("GenderType", e);
              }}
            >
              {genderValue.map((item) => {
                return <option value={item.id}>{item.value}</option>;
              })}
            </NativeSelect>
            <FormHelperText>جنسیت خود را انتخاب نمایید</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl align="right">
            <InputLabel>شفل</InputLabel>
            <NativeSelect
              className={classes.selectInput}
              value={info.JobType}
              onChange={(e) => {
                setInfoUser("JobType", e);
              }}
            >
              {jobValue.map((item) => {
                return <option value={item.id}>{item.value}</option>;
              })}
            </NativeSelect>
            <FormHelperText>شغل خود را انتخاب نمایید</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            required
            className={classes.input}
            placeholder="شماره تلفن"
            type="tel"
            value={info.TelNum}
            onChange={(e) => {
              setInfoUser("TelNum", e);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            className={classes.input}
            placeholder="کد ملی"
            type="text"
            value={info.NationalCode}
            onChange={(e) => {
              setInfoUser("NationalCode", e);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            className={classes.input}
            placeholder="ایمیل"
            type="Email"
            value={info.email}
            onChange={(e) => {
              setInfoUser("Email", e);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            required
            className={classes.input}
            placeholder="رمز عبور"
            type="password"
            value={info.Password}
            onChange={(e) => {
              setInfoUser("Password", e);
            }}
          />
        </Grid>
        <Grid item xs={12} className={classes.btnSection}>
          <Button
            className={classes.btnSave}
            variant={"contained"}
            color={"primary"}
            onClick={() => onSaveEdit(info)}
          >
            ثبت تغييرات
          </Button>
          <Button
            variant={"contained"}
            color={"secondary"}
            onClick={onBackPressed}
          >
            لغو
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Inputs;
