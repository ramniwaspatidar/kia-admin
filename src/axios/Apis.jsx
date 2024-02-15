import { APIsMethod } from "../constants/index";
import AxiosInstance from "./AxiosInstance";

// MARK : Request
async function apisRequest(url, method, params = {}, headers) {
  switch (method) {
    case APIsMethod.get:
      try {
        const getResponse = await AxiosInstance.get(url, { headers });
        return getResponse.data;
      } catch (error) {
        const getError = error.message;
        // if (getError === kError) {
        //   unauthorizedAlert(error.response.data.message);
        // } else {
        //   return error;
        // }
      }

      break;

    case APIsMethod.put:
      try {
        const getResponse = await AxiosInstance.put(url, params, { headers });
        return getResponse.data;
      } catch (error) {
        const getError = error.message;
        // if (getError === kError) {
        //   unauthorizedAlert(error.response.data.message);
        // } else {
        //   return error;
        // }
      }
      break;

    case APIsMethod.post:
      try {
        const getResponse = await AxiosInstance.post(url, params, { headers });
        return getResponse.data;
      } catch (error) {
        // const getError = error.message;
        // if (getError === kError) {
        //   unauthorizedAlert(error.response.data.message);
        // } else {
        //   return error;
        // }
      }
      break;

    case APIsMethod.delete:
      try {
        const getResponse = await AxiosInstance.delete(url, {
          data: params,
          headers,
        });
        return getResponse.data;
      } catch (error) {
        const getError = error.message;
        // if (getError === kError) {
        //   unauthorizedAlert(error.response.data.message);
        // } else {
        //   return error;
        // }
      }
      break;

    case APIsMethod.patch:
      try {
        const getResponse = await AxiosInstance.patch(url, params, { headers });
        return getResponse.data;
      } catch (error) {
        const getError = error.message;
        // if (getError === kError) {
        //   unauthorizedAlert(error.response.data.message);
        // } else {
        //   return error;
        // }
      }
      break;

    default:
      try {
        const getResponse = await AxiosInstance.post(url, params);
        return getResponse.data;
      } catch (error) {
        const getError = error.message;
        // if (getError === kError) {
        //   unauthorizedAlert(error.response.data.message);
        // } else {
        //   return error;
        // }
      }
      break;
  }
}

export const Apis = {
  request: (url, method = APIsMethod.post, params = {}, headers) => apisRequest(url, method, params, headers),
};
