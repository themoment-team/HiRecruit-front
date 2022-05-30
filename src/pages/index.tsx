import type { NextPage } from 'next';

import { Map } from 'components/Map';
import { WorkerData } from 'types/worker.type';

interface PageProps {
  workerList: WorkerData[];
}

export async function getServerSideProps() {
  const res = await fetch(
    `https://8332-2001-2d8-ea7e-a966-2df3-874-cb24-a656.ngrok.io/api/v1/worker`,
  );
  const workerList: WorkerData[] = await res.json();

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
