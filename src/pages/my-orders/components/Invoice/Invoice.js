import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import { Grid } from "@material-ui/core";
import classNames from "classnames";
import Wallet from "../../../user-information/components/wallet/Wallet";
import Loading from "./../../../../components/Loading/Loading";
import { toast } from "material-react-toastify";
import { getOrderDetail } from "../../../../api/api_content";

const Invoice = (props) => {
  const classes = useStyles();
  const [isLoading, setLoading] = useState(true);
  const [orderDetail, setOrderDetail] = useState();

  useEffect(() => {
    getOrderDetail((isOk, data) => {
      if (!isOk) return toast.warning(data.message);
      setOrderDetail(data);
    });
    setLoading(false);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  console.log("orderDetail", orderDetail);
  return (
    <Grid container>
      <Grid item className={classes.infoGrid}>
        <section>
          {/*<div className={classes.infoItem}>*/}
          {/*  <h4>اعتبار حساب شما:</h4>*/}
          {/*  <h4>{orderDetail.size}</h4>*/}
          {/*</div>*/}

          <div className={classNames(classes.infoItem, classes.sumPrice)}>
            <h4>مبلغ کتاب ها:</h4>
            <h4>{orderDetail.totalamount}</h4>
          </div>
        </section>
      </Grid>
    </Grid>
  );
};

export default Invoice;
