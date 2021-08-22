import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
import useStyles from "./styles";
import {
  setWallet,
  updateWallet,
  useProductDispatch,
  useProductState,
} from "../../../../context/ProductContext";
import Wallet from "../wallet/Wallet";

const PayBtn = (props) => {
  const classes = useStyles();
  const { walletValue } = useProductState();
  const walletDispatch = useProductDispatch();

  const handleWallet = () => {
    const newValue = Number(walletValue) - Number(props.sumValue);
    console.log(walletValue);
    console.log(props.sumValue);
    console.log(newValue);
    setWallet(walletDispatch, newValue);
  };
  console.log("walletValue", walletValue);

  useEffect(() => {
    updateWallet(walletDispatch);
  }, [walletValue]);

  return (
    <div className={classes.root}>
      <Wallet price={walletValue} />
      <Button
        className={classes.btn}
        variant={"contained"}
        fullWidth
        color={"primary"}
        onClick={() => handleWallet()}
      >
        پرداخت از طریق کیف پول
      </Button>
    </div>
  );
};

export default PayBtn;
