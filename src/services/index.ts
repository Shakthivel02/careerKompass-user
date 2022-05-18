import axios from "axios";
import ROUTES from "../const/routes";

const axiosConfig = {
  baseURL: "https://184.73.172.162:3000/api/",
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
