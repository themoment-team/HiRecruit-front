import { useEffect, useState } from 'react';
import { css } from '@emotion/react';

import { WorkerCard } from 'components/WorkerCard';
import useWorkerList from 'hooks/api/worker/use-worker-list';

import * as S from './WorkerList.styles';
import { UserRule } from 'types/site.type';

interface WorkerListProps {
  searchState: string;
  userRules: UserRule;
}

export const WorkerListComponent: React.FC<WorkerListProps> = ({
  searchState,
  userRules,
}) => {
  const { data: initialWorkerList } = useWorkerList();
  const [workerList, setWorkerList] = useState(initialWorkerList);

  useEffect(() => {
    if (!initialWorkerList) return;
    if (searchState === '' || searchState === undefined) {
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
  }, [searchState, initialWorkerList]);

  return (
    <S.WorkerList
      css={
        (userRules === 'NO_AUTH_USER' || userRules === 'MENTOR') &&
        css`
          margin-top: 1rem;
          height: calc(100% - 6.275rem);
        `
      }
    >
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
            githubLoginId={info.githubLoginId}
            email={info.email}
            introduction={info.introduction}
            profileImgUri={info.profileImgUri}
            devYear={info.devYear}
            position={info.position}
            userType={info.userType}
            companyName={info.company.name}
            location={info.company.location}
          />
        ))
      )}
    </S.WorkerList>
  );
};
