import Axios from "axios";

export const getAxiosInstanceApi = () => {
  const token = localStorage.getItem("token");
  return Axios.create({
    baseURL: "http://192.168.169.117:45455/api/",
    headers: {
      "Content-type": "application/json;",
      Authorization: "Bearer " + token,
    },
  });
};
export const getAxiosInstanceJsonServer = () => {
  return Axios.create({
    baseURL: "http://localhost:3010/",
    headers: {
      "Content-type": "application/json;",
    },
  });
};
