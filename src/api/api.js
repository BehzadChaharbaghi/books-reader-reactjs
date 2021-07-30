import Axios from "axios";

export const getAxiosInstanceJsonServer = () => {
  return Axios.create({
    baseURL: "http://localhost:3010/",
    headers: {},
  });
};
