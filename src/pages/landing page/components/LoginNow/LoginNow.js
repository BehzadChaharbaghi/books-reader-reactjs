import React, { useState } from "react";
import useStyles from "./styles";
import { Button } from "@material-ui/core";
import AuthSwiper from "../../../auth/AuthSwiper/AuthSwiper";

const LoginNow = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classes.root}>
      <section className={classes.section}>
        <h3 className={classes.text}>همین الان در تاک ثبت نام کنید</h3>
        <Button className={classes.btnLogin} onClick={() => setIsOpen(true)}>
          ثبت نام
        </Button>
      </section>
      {isOpen && <AuthSwiper isOpen={isOpen} />}
    </div>
  );
};

export default LoginNow;
