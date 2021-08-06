import { getAxiosInstanceJsonServer } from "./api";

export const loginApi = (user, callback) => {
  console.log(JSON.stringify(user));
  getAxiosInstanceJsonServer()
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
