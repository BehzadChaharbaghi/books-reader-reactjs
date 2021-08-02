import { getAxiosInstanceJsonServer } from "./api";

export const loginApi = (user, callback) => {
  getAxiosInstanceJsonServer()
    .post("users", user)
    .then((response) => {
      const data = response.data;
      console.log(data);
      callback(true, data);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error.response.data.message);
    });
};
