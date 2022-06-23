import useSWR from 'swr';
import apiClient from 'libs/axios/axiosClient';
import { workerUrl } from 'libs/api/apiUrlControllers';
import { WorkerData } from 'types/worker.type';

interface UseWorker {
  data: WorkerData;
}

const useWorker = () => {
  const { data, error } = useSWR<UseWorker>(
    workerUrl.getMeWorker(),
    apiClient.get,
  );

  return {
    data: data?.data,
    isLoading: !error && data,
    isError: error,
  };
};

export default useWorker;
