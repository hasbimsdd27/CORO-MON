import { GET_GLOBAL_DATA, GET_DATA_COUNTRY } from "../config/constants";
import { API } from "../config/api";

export const getGlobalData = () => {
  return {
    type: GET_GLOBAL_DATA,
    payload: async () => {
      const res = await API.get();
      return res.data;
    }
  };
};

export const getDataCountry = id => {
  return {
    type: GET_DATA_COUNTRY,
    payload: async () => {
      const res = await API.get(`/?country=${id}`);
      return res.data;
    }
  };
};
