import useSWR from 'swr';

import apiClient from 'libs/axios/axiosClient';
import { WorkerData } from 'types/worker.type';

interface UseWorkerList {
  data: WorkerData[];
}

const useWorkerList = () => {
  const { data, error } = useSWR<UseWorkerList>(`/worker`, apiClient.get);

  return {
    data: data?.data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useWorkerList;
