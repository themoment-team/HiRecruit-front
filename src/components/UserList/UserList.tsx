import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import { WorkerData } from 'types/worker.type';
import { UserCard } from 'components/UserCard';
import pallete from 'shared/Pallete';
import { getWorkerList } from 'libs/api/worker.api';

interface UserListProps {
  searchState: string;
  workerList: WorkerData[];
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

export const UserListComponent: React.FC<UserListProps> = ({
  searchState,
  workerList,
}) => {
  const [userList, setUserList] = useState<WorkerData[]>(workerList);

  useEffect(() => {
    if (searchState === '') {
      setUserList(workerList);
    } else {
      setUserList(
        workerList.filter(
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
