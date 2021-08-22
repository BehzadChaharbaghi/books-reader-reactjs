import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import Items from "./components/items/Items";
import { toast } from "material-react-toastify";
import Loading from "../../components/Loading/Loading";
import Invoice from "./components/Invoice/Invoice";
import {
  setOrderItem,
  useProductDispatch,
  useProductState,
} from "../../context/ProductContext";
import Wallet from "../user-information/components/wallet/Wallet";
import PayBtn from "../user-information/components/pay-btn/PayBtn";
import { getOrdersList } from "../../api/api_content";

const MyOrders = () => {
  const classes = useStyles();
  const { orderList } = useProductState();
  const orderItemsDispatch = useProductDispatch();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getOrdersList((isOk, data) => {
      if (!isOk) return toast.warning(data.message);
      setOrderItem(orderItemsDispatch, data);
    });
    setLoading(false);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <ul>
          {orderList.map((item) => (
            <>
              <Items items={item} />
            </>
          ))}
        </ul>
        <Invoice />
        <PayBtn sumValue={5} />
      </div>
    </div>
  );
};

export default MyOrders;
