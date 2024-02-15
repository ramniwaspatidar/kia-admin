import axios from "axios";

import Cookies from "js-cookie";

// Config axios defaults.
const AxiosInstance = axios.create({
  timeout: 10000,
  headers: {},
});

// Add a request interceptor
AxiosInstance.interceptors.request.use(
  async function (config) {
    const newConf = { ...config };
    try {
      const authorizationToken = Cookies.get("firebaseToken");

      if (authorizationToken && newConf.headers) {
        newConf.headers.Authorization = `Bearer ${authorizationToken}`;
        newConf.headers["accept-language"] = "";
        // newConf.headers['Content-Type'] = 'multipart/form-data';
      }
    } catch (error) {}
    return newConf;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
AxiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default AxiosInstance;
