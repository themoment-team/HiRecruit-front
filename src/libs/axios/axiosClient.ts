import axios, { AxiosInstance as AxiosClient } from 'axios';

const URL_PREFIX = '/api/v1';

const axiosClient: AxiosClient = axios.create({
  baseURL: process.env.baseUrl + URL_PREFIX,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,DELETE,PATCH,PUT,OPTIONS',
    'Access-Control-Allow-Headers':
      'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials',
  },
});

export default axiosClient;
