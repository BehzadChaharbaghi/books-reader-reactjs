import Axios from "axios";

export const getAxiosInstanceJsonServer = () => {
  return Axios.create({
    baseURL: "http://localhost:3010/",
    headers: {},
  });
};
// export const postJSHolder = () => {
//   return Axios.create({
//     baseURL: "https://jsonplaceholder.typicode.com/",
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   });
// };
