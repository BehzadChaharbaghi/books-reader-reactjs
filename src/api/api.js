import Axios from "axios";

// export const getAxiosInstanceJsonServer = () => {
//   const token = localStorage.getItem("token");
//   return Axios.create({
//     baseURL: "https://192.168.43.121:45456/api/",
//     headers: {
//       "Content-type": "application/json;",
//       Authorization: "Bearer " + token,
//     },
//   });
// };
export const getAxiosInstanceJsonServer = () => {
  return Axios.create({
    baseURL: "http://localhost:3010/",
    headers: {
      "Content-type": "application/json;",
    },
  });
};
