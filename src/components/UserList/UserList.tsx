import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import { UserData } from 'types/worker.type';
import { UserCard } from 'components/UserCard';
import pallete from 'shared/Pallete';

interface UserListProps {
  searchState: string;
}

const UserList = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-bottom: 1.5rem;
  height: calc(100vh - 10rem);
  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
  border-radius: 0.5rem 0.5rem 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const NotFoundUser = styled.p`
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  line-height: 1.2;
  color: ${pallete.scheme.paragraph};
`;

const data: UserData[] = [
  {
    workerId: 12,
    name: 'Berkley Mapam',
    email: 'bmapam0@netscape.com',
    introduction: '안녕하세요 정시원입니다.',
    profileImgUri: 'https://github.com/sunwoo0706.png',
    devYear: 7,
    position: '프론트엔드',
    company: {
      companyId: 12,
      name: 'Ozu',
      location: '서울 송파구 올림픽로300, 35층',
      homepageUri: 'https://www.ozu.ac.kr/',
      companyImgUri: 'https://avatars.githubusercontent.com/u/62932968?v=4',
    },
  },
];

export const UserListComponent: React.FC<UserListProps> = ({ searchState }) => {
  const [userList, setUserList] = useState<UserData[]>(data);

  useEffect(() => {
    if (searchState === '') {
      setUserList(data);
    } else {
      setUserList(
        data.filter(
          user =>
            user.name.includes(searchState) ||
            user.company.name.includes(searchState),
        ),
      );
    }
  }, [searchState]);

  return (
    <UserList>
      {userList.length === 0 ? (
        <NotFoundUser>
          찾으시는 결과가 존재하지 않습니다.
          <br />
          철자와 띄어쓰기를 확인해주세요.
        </NotFoundUser>
      ) : (
        userList.map(info => (
          <UserCard
            key={info.workerId}
            name={info.name}
            email={info.email}
            introduction={info.introduction}
            profileImgUri={info.profileImgUri}
            devYear={info.devYear}
            position={info.position}
            companyName={info.company.name}
            location={info.company.location}
          />
        ))
      )}
    </UserList>
  );
};
