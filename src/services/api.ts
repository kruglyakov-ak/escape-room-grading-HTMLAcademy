import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

const BACKEND_URL = 'http://localhost:3001';
const REQUEST_TIMEOUT = 5000;

const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use(
    (response: AxiosResponse) => response,

    (error: AxiosError) => {
      return Promise.reject(error);
    },
  );

  return api;
};

export { createAPI };
