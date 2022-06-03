import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import { WorkerCard } from 'components/WorkerCard';
import pallete from 'shared/Pallete';
import useWorkerList from 'hooks/api/worker/use-worker-list';

interface WorkerListProps {
  searchState: string;
}

const WorkerList = styled.div`
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

const StatusMessage = styled.p`
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  line-height: 1.2;
  color: ${pallete.scheme.paragraph};
`;

export const WorkerListComponent: React.FC<WorkerListProps> = ({
  searchState,
}) => {
  const initialWorkerList = useWorkerList();
  const [workerList, setWorkerList] = useState(initialWorkerList);

  useEffect(() => {
    if (!initialWorkerList) return;
    if (searchState === '') {
      setWorkerList(initialWorkerList);
    } else {
      setWorkerList(
        initialWorkerList.filter(
          worker =>
            worker.name.includes(searchState) ||
            worker.company.name.includes(searchState),
        ),
      );
    }
  }, [workerList, searchState, initialWorkerList]);

  return (
    <WorkerList>
      {workerList?.length === 0 ? (
        <StatusMessage>
          찾으시는 결과가 존재하지 않습니다.
          <br />
          철자와 띄어쓰기를 확인해주세요.
        </StatusMessage>
      ) : (
        workerList?.map(info => (
          <WorkerCard
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
    </WorkerList>
  );
};