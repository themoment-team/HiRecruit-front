import useSWR from 'swr';

import apiClient from 'libs/axios/axiosClient';
import { WorkerData } from 'types/worker.type';
import { workerUrl } from 'libs/api/apiUrlControllers';

interface UseWorkerList {
  data: WorkerData[];
}

const useWorkerList = () => {
  const { data, error } = useSWR<UseWorkerList>(
    workerUrl.getAllWorker(),
    apiClient.get,
  );

  return {
    data: data?.data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useWorkerList;
