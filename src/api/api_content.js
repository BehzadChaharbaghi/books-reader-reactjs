import { getAxiosInstanceApi, getAxiosInstanceJsonServer } from "./api";
import Axios from "axios";

// export const getProductByIdRequest = (id, callback) => {
//   getAxiosInstanceJsonServer()
//     .post("getMostSelledProducts", { id })
//     .then((response) => {
//       const data = response.data;
//       callback(true, data);
//     })
//     .catch((error) => {
//       console.log(error);
//       callback(false, error);
//     });
// };
// export const getProductByIdRequest = (callback) => {
//   getAxiosInstanceJsonServer()
//     .get("product/findbyid/"+)
//     .then((response) => {
//       const data = response.data;
//       callback(true, data);
//     })
//     .catch((error) => {
//       console.log(error);
//       callback(false, error);
//     });
// };

export const getMainProductCategoryList = (callback) => {
  getAxiosInstanceJsonServer()
    .get("getMainProductCategoryList")
    .then((response) => {
      const data = response.data;
      callback(true, data);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error);
    });
};

export const getFreeProductCategoryList = (callback) => {
  getAxiosInstanceApi()
    .get("Product/GetFreeProducts")
    .then((response) => {
      const data = response.data;
      callback(true, data);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error);
    });
};

export const getMostSelledProducts = (callback) => {
  getAxiosInstanceApi()
    .get("Product/GetMostSoldProducts")
    .then((response) => {
      const data = response.data;
      callback(true, data);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error);
    });
};
export const getNewestProducts = (callback) => {
  getAxiosInstanceApi()
    .get("Product/GetNewestPropducts")
    .then((response) => {
      const data = response.data;
      console.log("data", data);
      callback(true, data);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error);
    });
};

export const getCategoryItem = (callback) => {
  getAxiosInstanceApi()
    .get("Product/GetAll?categoryid=3&page=1&pageSize=20")
    .then((response) => {
      const data = response.data;
      callback(true, data);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error);
    });
};

export const getCategoryTitle = (callback) => {
  getAxiosInstanceApi()
    .get("product/GetProductsByCategoryId")
    .then((response) => {
      const data = response.data;
      callback(true, data);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error);
    });
};

export const getMoreSection = (callback) => {
  getAxiosInstanceApi()
    .get("product/GetMostVisitedProducts")
    .then((response) => {
      console.log(response);
      const data = response.data;
      callback(true, data);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error);
    });
};

export const getProductCategorie = (callback) => {
  getAxiosInstanceJsonServer()
    .get("categorie")
    .then((response) => {
      const data = response.data;
      callback(true, data);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error);
    });
};

export const getSubscriptionTypes = (callback) => {
  getAxiosInstanceJsonServer()
    .get("subscriptionTypes")
    .then((response) => {
      const data = response.data;
      callback(true, data);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error);
    });
};
export const getIncreaseCredit = (callback) => {
  getAxiosInstanceJsonServer()
    .get("IncreaseCredit")
    .then((response) => {
      const data = response.data;
      callback(true, data);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error);
    });
};

export const uploadUserPhoto = (photo, callback) => {
  getAxiosInstanceApi()
    .get("uploadUserPhoto", photo)
    .then((response) => {
      const data = response.data;
      callback(true, data);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error.response.data.message);
    });
};

export const getUserInfo = (id, callback) => {
  // getAxiosInstanceApi()
  //   .get(`person/findbyid/${id}`)
  //   .then((response) => {
  //     const data = response.data;
  //     callback(true, data);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //     callback(false, error);
  //   });
};

export const putUserInfo = (data, callback) => {
  console.log(data);
  getAxiosInstanceApi()
    .put("person/edit", JSON.stringify(data))
    .then((response) => {
      const data = response.data;
      callback(true, data);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error);
    });
};

export const getUserFavorites = (callback) => {
  //userid
  getAxiosInstanceApi()
    .get("product/getUserFavorites")
    .then((response) => {
      console.log(response);
      const data = response.data;
      callback(true, data);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error);
    });
};

export const newCommentRequest = (data, callback) => {
  console.log(JSON.stringify(data));
  getAxiosInstanceApi()
    .post("comment/create", JSON.stringify(data))
    .then((response) => {
      const data = response.data;
      callback(true, data);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error);
    });
};

export const postCardOrder = (data, callback) => {
  // console.log(JSON.stringify(data));
  getAxiosInstanceApi()
    .post("orderitem/create", JSON.stringify(data))
    .then((response) => {
      const data = response.data;
      callback(true, data);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error);
    });
};

export const getOrdersList = (callback) => {
  getAxiosInstanceApi()
    .get("orderitem/getall")
    .then((response) => {
      console.log(response);
      const data = response.data;
      callback(true, data);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error);
    });
};

export const getOrderDetail = (callback) => {
  getAxiosInstanceApi()
    .get("order/findbyid")
    .then((response) => {
      console.log(response);
      const data = response.data;
      callback(true, data);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error);
    });
};

export const getNavbarItems = (callback) => {
  getAxiosInstanceApi()
    .get("productcategory/getall")
    .then((response) => {
      console.log(response);
      const data = response.data;
      callback(true, data);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error);
    });
};
export const getProductBySearch = (callback) => {
  getAxiosInstanceApi()
    .get("product/getall?...")
    .then((response) => {
      console.log(response);
      const data = response.data;
      callback(true, data);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error);
    });
};
export const getCommentOfProduct = (callback) => {
  getAxiosInstanceApi()
    .get("comment/getall")
    .then((response) => {
      console.log(response);
      const data = response.data;
      callback(true, data);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error);
    });
};

export const removeProductInOrder = (id, callback) => {
  getAxiosInstanceApi()
    .delete(`OrderItem/Delete/${id}`)
    .then((response) => {
      const data = response.data;
      callback(true, data);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error);
    });
};

export const postRateByProductId = (data, callback) => {
  // console.log(JSON.stringify(data));
  getAxiosInstanceApi()
    .post("productrate/create", JSON.stringify(data))
    .then((response) => {
      const data = response.data;
      callback(true, data);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error);
    });
};
