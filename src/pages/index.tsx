import type { NextPage } from 'next';

import { Map } from 'components/Map';
import { SideBar } from 'components/SideBar';

const Home: NextPage = () => {
  return (
    <>
      <Map />
      <SideBar />
    </>
  );
};

export default Home;
