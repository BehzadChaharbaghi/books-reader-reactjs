import React from "react";
import useStyles from "./styles";
import { Button } from "@material-ui/core";

const LoginNow = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <section className={classes.section}>
        <h3 className={classes.text}>همین الان در تاک ثبت نام کنید</h3>
        <Button className={classes.btnLogin}>ثبت نام</Button>
      </section>
    </div>
  );
};

export default LoginNow;
