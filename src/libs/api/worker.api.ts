import axiosClient from 'libs/axios/axiosClient';

export const getWorkerList = async (): Promise<> => {
  const url = '/user/my';
  const { data } = await axiosClient.get<IGetUserInfoResponse>(url);
  return data;
};
