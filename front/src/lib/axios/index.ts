import Axios from "axios";

export const axios = Axios.create({
  baseURL: import.meta.env.BASE_URL,
  withCredentials: true,
});

// TODO: response 공통객체 적용여부 검토
axios.interceptors.response.use(
  (res) => {
    return res.data.success;
  },
  (error) => {
    if (error.data.resultType === "SUCCESS") {
      return error.data.success;
    }
    throw new Error(error.data.error.message);
  }
);
