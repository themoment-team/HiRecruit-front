import type { NextPage } from 'next';

import { Map } from 'components/Map';
import { WorkerData } from 'types/worker.type';
import { getWorkerList } from 'libs/api/worker.api';

interface PageProps {
  workerList: WorkerData[];
}

export async function getServerSideProps() {
  let workerList;

  try {
    const data = await getWorkerList();
    workerList = data;
  } catch (e: any) {
    console.log(e);
  }

  return {
    props: {
      workerList,
    },
  };
}

const Home: NextPage<PageProps> = ({ workerList }) => {
  return <Map workerList={workerList} />;
};

export default Home;
