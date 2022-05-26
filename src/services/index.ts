import axios from "axios";
import ROUTES from "../const/routes";

export const BASEURL = "http://localhost:4300/api/";

const axiosConfig = {
  baseURL: BASEURL,
  timeout: 30000,
  headers: {
    "content-type": "application/json; charset=utf-8",
    Accept: "application/json",
  },
};

const api = axios.create(axiosConfig);

api.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: any) => {
    if (
      error?.response?.status === 401 &&
      window.location.pathname !== ROUTES.LOGIN
    ) {
      window.location.reload();
    }
    return Promise.reject(error);
  }
);

export default api;
