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
export const getProductByIdRequest = (callback) => {
  getAxiosInstanceJsonServer()
    .get("getMostSelledProducts")
    .then((response) => {
      const data = response.data;
      callback(true, data);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error);
    });
};

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
  getAxiosInstanceJsonServer()
    .get("getFreeProductCategoryList")
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
  getAxiosInstanceJsonServer()
    .get("getMostSelledProducts")
    .then((response) => {
      const data = response.data;
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
// old

export const getMoreSection = (callback) => {
  getAxiosInstanceJsonServer()
    .get("more")
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

export const getUserInfo = (callback) => {
  getAxiosInstanceApi()
    .get("person/findbyid/1001")
    .then((response) => {
      const data = response.data;
      callback(true, data);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error);
    });
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
  getAxiosInstanceApi()
    .get("")
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
