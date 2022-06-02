import { useCallback, useEffect, useState } from 'react';

import { WorkerData } from 'types/worker.type';
import { getWorkerList } from 'libs/api/worker.api';

const useWorkerList = () => {
  const [WorkerList, setWorkerList] = useState<WorkerData[]>();

  const handleGetWorkerList = useCallback(async () => {
    try {
      const data = await getWorkerList();
      setWorkerList(data);
    } catch (e: any) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    handleGetWorkerList();
  }, [handleGetWorkerList]);

  return WorkerList;
};

export default useWorkerList;
