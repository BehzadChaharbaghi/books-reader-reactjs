import React from "react";

var ProductStateContext = React.createContext();
var ProductDispatchContext = React.createContext();

//store bara rikhtan hame dakhelesh

function productReducer(state, action) {
  switch (action.type) {
    case "SET_COMMENT_TEXT":
      return { ...state, commentText: action.payload };
    case "SET_PRODUCT_DETAIL":
      return { ...state, productDetail: action.payload };
    case "SET_ORDER_LIST":
      return { ...state, orderList: action.payload };
    case "SET_WALLET":
      return { ...state, walletValue: action.payload };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function ProductProvider({ children }) {
  var [state, dispatch] = React.useReducer(productReducer, {
    productList: [],
    productDetail: [],
    commentText: "",
    orderList: [],
    walletValue: 250500,
  });
  return (
    <ProductStateContext.Provider value={state}>
      <ProductDispatchContext.Provider value={dispatch}>
        {children}
      </ProductDispatchContext.Provider>
    </ProductStateContext.Provider>
  );
}

function useProductState() {
  var context = React.useContext(ProductStateContext);
  if (context === undefined) {
    throw new Error("useProductState must be used within a ProductProvider");
  }
  return context;
}

function useProductDispatch() {
  var context = React.useContext(ProductDispatchContext);
  if (context === undefined) {
    throw new Error("useProductDispatch must be used within a ProductProvider");
  }
  return context;
}

export {
  ProductProvider,
  useProductState,
  useProductDispatch,
  setCommentText,
  setProductDetail,
  setOrderItem,
  updateOrderList,
  setWallet,
  updateWallet,
};

// ###########################_SetStates_################################
function setCommentText(dispatch, commentText) {
  dispatch({
    type: "SET_COMMENT_TEXT",
    payload: commentText,
  });
}
function setProductDetail(dispatch, list) {
  dispatch({
    type: "SET_PRODUCT_DETAIL",
    payload: list,
  });
}
function setOrderItem(dispatch, list) {
  dispatch({
    type: "SET_ORDER_LIST",
    payload: list,
  });
}
function setWallet(dispatch, number) {
  dispatch({
    type: "SET_WALLET",
    payload: number,
  });
}
function updateWallet(dispatch) {
  // eslint-disable-next-line no-unused-expressions
  (isOK, data) => {
    if (isOK) {
      dispatch({
        type: "SET_WALLET",
        payload: data,
      });
    }
  };
}

function updateOrderList(dispatch) {
  // (isOK, data) => {
  //   if (isOK) {
  //     dispatch({
  //       type: "SET_ORDER_LIST",
  //       payload: data,
  //     });
  //   }
  // };
}
