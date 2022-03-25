import type { NextPage } from 'next';

import { Map } from 'components/Map';
import { SideBar } from 'components/SideBar';
import { UserCard } from 'components/UserCard';

const Home: NextPage = () => {
  return (
    <>
      <Map />
      <SideBar>
        <UserCard
          name="이선우"
          githubId="sunwoo0706"
          email="sunwoo0706@icloud.com"
          company="광주소프트웨어마이스터고등학교"
          introduction="자연친화적인 카시오 시계를 차고 런던 거리를 활보하다가 새똥을 가까스로 피한 프론트엔드 개발자입니다"
        />
      </SideBar>
    </>
  );
};

export default Home;
