import { getAxiosInstanceApi, getAxiosInstanceJsonServer } from "./api";

export const loginApi = (user, callback) => {
  console.log(JSON.stringify(user));
  getAxiosInstanceApi()
    .post("auth/login", JSON.stringify(user))
    .then((response) => {
      const data = response.data;
      console.log(data);
      callback(true, data);
      // console.log(error);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error.response.data.message);
    });
};

export const registerApi = (user, callback) => {
  console.log(JSON.stringify(user));
  getAxiosInstanceApi()
    .post("auth/register", JSON.stringify(user))
    .then((response) => {
      const data = response.data;
      console.log(data);
      callback(true, data);
      // console.log(error);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error.response.data.message);
    });
};
