import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import { getWallet } from "../../../../api/api_content";
import { toast } from "material-react-toastify";
import Loading from "../../../../components/Loading/Loading";

const Wallet = () => {
  const classes = useStyles();
  const [isLoading, setLoading] = useState(true);
  const [wallet, setWallet] = useState(210500);

  // useEffect(() => {
  //   getWallet((isOk, data) => {
  //     if (!isOk) return toast.warning(data.message);
  //     setWallet(data);
  //     setLoading(false);
  //   });
  //   setLoading(false);
  // }, []);
  //
  // if (isLoading) {
  //   return <Loading />;
  // }
  return (
    <div className={classes.root}>
      <section className={classes.container}>
        <h4>موجودی کیف پول:</h4>
        <h4>{wallet} تومان</h4>
      </section>
    </div>
  );
};

export default Wallet;
