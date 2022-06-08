import { useEffect, useState } from 'react';

import { WorkerCard } from 'components/WorkerCard';
import useWorkerList from 'hooks/api/worker/use-worker-list';

import * as S from './WorkerList.styles';

interface WorkerListProps {
  searchState: string;
}

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
    <S.WorkerList>
      {workerList?.length === 0 ? (
        <S.StatusMessage>
          찾으시는 결과가 존재하지 않습니다.
          <br />
          철자와 띄어쓰기를 확인해주세요.
        </S.StatusMessage>
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
    </S.WorkerList>
  );
};
