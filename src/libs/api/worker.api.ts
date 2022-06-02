import axiosClient from 'libs/axios/axiosClient';
import { WorkerData } from 'types/worker.type';

/**
 * 전체 직장인 데이터 조회.
 */
export const getWorkerList = async (): Promise<WorkerData[]> => {
  const url = `/worker`;
  const { data } = await axiosClient.get<WorkerData[]>(url);
  return data;
};
