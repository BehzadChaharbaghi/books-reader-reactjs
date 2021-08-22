import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import DatePicker from "react-multi-date-picker";
import "react-multi-date-picker/styles/backgrounds/bg-dark.css"
import opacity from "react-element-popper/animations/opacity"
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
import classNames from 'classnames/bind';
import styled from 'styled-components';

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
  console.log(info);

  const setInfoUser = (key, e) => {
    switch (key) {
      case "firstName":
        setInfo({ ...info, firstName: e.target.value });
        break;
      case "lastName":
        setInfo({ ...info, lastName: e.target.value });
        break;
      case "birthDate":
        setInfo({ ...info, birthDate: e.target.value });
        break;
      case "nationalCode":
        setInfo({ ...info, nationalCode: e.target.value });
        break;
      case "genderType":
        setInfo({ ...info, genderType: parseInt(e.target.value) });
        break;
      case "jobType":
        setInfo({ ...info, jobType: parseInt(e.target.value) });
        break;
      case "phone":
        setInfo({ ...info, phone: e.target.value });
        break;
      case "email":
        setInfo({ ...info, email: e.target.value });
        break;
      case "Password":
        setInfo({ ...info, Password: e.target.value });
        break;
    }
  };

  const datePicker = (state) => {
    console.log(state);
    return (
      <DatePicker
        onOpen={state}
        className={"bg-dark"}
        // className={classNames(classes.dateInput, 'bg-dark')}
        // value={date}
        calendar={persian}
        animations={[opacity()]}
        BackGrounds="Dark"
        locale={persian_fa}
        calendarPosition="bottom-right"
        onChange={(e) => {
          setInfoUser("birthDay", e);
        }}
      />)
  }

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
            value={info.firstName}
            onChange={(e) => {
              setInfoUser("firstName", e);
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
            value={info.lastName}
            onChange={(e) => {
              setInfoUser("lastName", e);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <DatePicker
            placeholder="تاریخ تولد"
            inputClass={classes.dateInput}
            className={"bg-dark"}
            calendar={persian}
            animations={[opacity()]}
            locale={persian_fa}
            calendarPosition="bottom-right"
            onChange={(e) => {
              setInfoUser("birthDay", e);
            }}
          />

        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl align="right">
            <InputLabel>جنسیت</InputLabel>
            <NativeSelect
              className={classes.selectInput}
              variant='outline'
              value={info.genderType}
              onChange={(e) => {
                setInfoUser("genderType", e);
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
              value={info.jobType}
              onChange={(e) => {
                setInfoUser("jobType", e);
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
            disabled
            className={classes.input}
            placeholder="شماره تلفن"
            type="tel"
            value={info.phone}
            onChange={(e) => {
              setInfoUser("phone", e);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            className={classes.input}
            placeholder="کد ملی"
            type="text"
            value={info.nationalCode}
            onChange={(e) => {
              setInfoUser("nationalCode", e);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            className={classes.input}
            placeholder="ایمیل"
            type="Email"
            value={info.email}
          // onChange={(e) => {
          //   setInfoUser("email", e);
          // }}
          />
        </Grid>
        {/*<Grid item xs={12} sm={6} md={4}>*/}
        {/*  <TextField*/}
        {/*    required*/}
        {/*    className={classes.input}*/}
        {/*    placeholder="رمز عبور"*/}
        {/*    type="password"*/}
        {/*    value={info.Password}*/}
        {/*    onChange={(e) => {*/}
        {/*      setInfoUser("Password", e);*/}
        {/*    }}*/}
        {/*  />*/}
        {/*</Grid>*/}
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
