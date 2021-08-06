import { getAxiosInstanceJsonServer } from "./api";

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

export const newCommentRequest = (data, callback) => {
  getAxiosInstanceJsonServer()
    .post("newComment", data)
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
