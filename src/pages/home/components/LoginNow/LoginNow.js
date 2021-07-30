import React, { useState } from "react";
import useStyles from "./styles";
import { Button } from "@material-ui/core";
import Auth from "../../../auth/Auth";

const LoginNow = () => {
  const classes = useStyles();
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <div className={classes.root}>
      <section className={classes.section}>
        <h3 className={classes.text}>همین الان در تاک ثبت نام کنید</h3>
        <Button className={classes.btnLogin} onClick={() => setOpenPopup(true)}>
          ثبت نام
        </Button>
      </section>
      <Auth openPopup={openPopup} />
    </div>
  );
};

export default LoginNow;
