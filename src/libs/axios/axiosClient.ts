import axios, { AxiosInstance as AxiosClient } from 'axios';

const axiosClient: AxiosClient = axios.create({
  baseURL: process.env.baseUrl,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,DELETE,PATCH,PUT,OPTIONS',
  },
});

export default axiosClient;
