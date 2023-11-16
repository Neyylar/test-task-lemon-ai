import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';

const config: AxiosRequestConfig = {
  baseURL: '',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

const axiosInstance = axios.create(config);

export const get = <T>(url: string, options?: AxiosRequestConfig) =>
  axiosInstance
    .get<T>(url, options)
    .then((res) => res.data)
    .catch((error) => {
      throw error.response?.data ?? error;
    });

export const post = <T>(
  url: string,
  body?: Record<string, unknown> | unknown[] | FormData,
  options?: AxiosRequestConfig
) =>
  axiosInstance
    .post<T>(url, body, options)
    .then((res) => res.data)
    .catch((error) => {
      throw error.response?.data ?? error;
    });
