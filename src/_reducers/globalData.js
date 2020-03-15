import { GET_GLOBAL_DATA, GET_DATA_COUNTRY } from "../config/constants";

const initialState = {
  data: [],
  loading: false,
  error: false
};

const GLOBALDATA = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_GLOBAL_DATA}_PENDING`:
    case `${GET_DATA_COUNTRY}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_GLOBAL_DATA}_FULFILLED`:
    case `${GET_DATA_COUNTRY}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case `${GET_GLOBAL_DATA}_REJECTED`:
    case `${GET_DATA_COUNTRY}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: true
      };

    default:
      return state;
  }
};

export default GLOBALDATA;
