import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import { UserData } from 'shared/Type';
import { UserCard } from 'components/UserCard';
import pallete from 'shared/Pallete';

interface UserListProps {
  searchState: string;
}

const UserList = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-bottom: 1.5rem;
  height: calc(100vh - 6rem);
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
    name: 'Berkley Mapam',
    imageUrl:
      'https://robohash.org/praesentiumautsimilique.png?size=50x50&set=set1',
    email: 'bmapam0@netscape.com',
    company: 'Ozu',
    introduction: 'Software Consultant',
    location: '서울 송파구 올림픽로300, 35층',
  },
  {
    name: 'Sianna Inde',
    imageUrl: 'https://robohash.org/odiosuntaut.png?size=50x50&set=set1',
    email: 'sinde1@canalblog.com',
    company: 'Brightdog',
    introduction: 'Quality Control Specialist',
    location: '서울 구로구 디지털로31길 53 1101호',
  },
  {
    name: 'Kelsey McMichan',
    imageUrl: 'https://robohash.org/doloresfugitet.png?size=50x50&set=set1',
    email: 'kmcmichan2@artisteer.com',
    company: 'Rhyzio',
    introduction: 'Technical Writer',
    location: '서울 강남구 삼성1동 봉은사로86길 6 (602호)',
  },
  {
    name: 'Kelsey McMichan',
    imageUrl: 'https://robohash.org/doloresfugitet.png?size=50x50&set=set1',
    email: 'kmcmichan2@artisteer.com',
    company: 'Rhyzio',
    introduction: 'Technical Writer',
    location:
      '대구광역시 동구 동대구로 461(신천동) (재)대구경북디자인센터 1004호',
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
            user.company.includes(searchState),
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
        userList.map(
          (
            { name, imageUrl, email, company, introduction, year, location },
            i,
          ) => (
            <UserCard
              key={i}
              name={name}
              imageUrl={imageUrl}
              email={email}
              company={company}
              introduction={introduction}
              location={location}
              year={year}
            />
          ),
        )
      )}
    </UserList>
  );
};
