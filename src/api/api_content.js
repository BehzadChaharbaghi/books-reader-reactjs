import { getAxiosInstanceJsonServer } from "./api";

export const getMoreSection = (callback) => {
  getAxiosInstanceJsonServer()
    .get("more")
    .then((response) => {
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
