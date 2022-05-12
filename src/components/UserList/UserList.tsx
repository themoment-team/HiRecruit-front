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
  gap: 1rem;
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
    name: '김도준',
    imageUrl:
      'https://robohash.org/praesentiumautsimilique.png?size=50x50&set=set1',
    email: 'bmapam0@netscape.com',
    company: '(주)나루스튜디오',
    introduction: 'Software Consultant',
  },
  {
    name: '홍진택',
    imageUrl: 'https://robohash.org/odiosuntaut.png?size=50x50&set=set1',
    email: 'sinde1@canalblog.com',
    company: '(주)사이버다임',
    introduction: 'Quality Control Specialist',
  },
  {
    name: '한승재',
    imageUrl: 'https://robohash.org/doloresfugitet.png?size=50x50&set=set1',
    email: 'kmcmichan2@artisteer.com',
    company: '(주)스파이더크래프트',
    introduction: 'Technical Writer',
  },
  {
    name: '배재범',
    imageUrl: 'https://robohash.org/quasivitaevelit.png?size=50x50&set=set1',
    email: 'mhebner3@nps.gov',
    company: '(주)우경정보기술',
    introduction: 'Business Systems Development Analyst',
  },
  {
    name: '전인성',
    imageUrl: 'https://robohash.org/rerumetqui.png?size=50x50&set=set1',
    email: 'mharriot4@amazon.de',
    company: '(주)우경정보기술',
    introduction: 'Developer IV',
  },
  {
    name: '이영은',
    imageUrl:
      'https://robohash.org/laboreexcepturinesciunt.png?size=50x50&set=set1',
    email: 'psparkes5@cbc.ca',
    company: '(주)직랩',
    introduction: 'Analog Circuit Design manager',
  },
  {
    name: '임준혁',
    imageUrl: 'https://robohash.org/eamollitiadebitis.png?size=50x50&set=set1',
    email: 'lcheson6@nhs.uk',
    company: '(주)직랩',
    introduction: 'Financial Advisor',
  },
  {
    name: '제정민',
    imageUrl:
      'https://robohash.org/impeditnesciuntdeleniti.png?size=50x50&set=set1',
    email: 'corrobin7@taobao.com',
    company: 'FLO',
    introduction: 'Product Engineer',
  },
  {
    name: '오해성',
    imageUrl: 'https://robohash.org/autporroquaerat.png?size=50x50&set=set1',
    email: 'tpolglase8@dmoz.org',
    company: 'OP.GG',
    introduction: 'Actuary',
  },
  {
    name: '김종우',
    imageUrl:
      'https://robohash.org/inciduntmolestiaeest.png?size=50x50&set=set1',
    email: 'vcicculini9@noaa.gov',
    company: '더스윙',
    introduction: 'Professor',
  },
  {
    name: '정성화',
    imageUrl:
      'https://robohash.org/pariaturetreprehenderit.png?size=50x50&set=set1',
    email: 'bbartolozzia@nationalgeographic.com',
    company: '더스윙',
    introduction: 'Accountant III',
  },
  {
    name: '박휘겸',
    imageUrl: 'https://robohash.org/adbeataequae.png?size=50x50&set=set1',
    email: 'ccogarb@photobucket.com',
    company: '민병철유폰',
    introduction: 'Compensation Analyst',
  },
  {
    name: '김주엽',
    imageUrl: 'https://robohash.org/utsapientehic.png?size=50x50&set=set1',
    email: 'tgeallc@shareasale.com',
    company: '여기어때컴퍼니',
    introduction: 'Marketing Manager',
  },
  {
    name: '차승호',
    imageUrl: 'https://robohash.org/providentestea.png?size=50x50&set=set1',
    email: 'kmitrikhind@chron.com',
    company: '원티드랩',
    introduction: 'Web Designer II',
  },
  {
    name: '이규락',
    imageUrl: 'https://robohash.org/autoditlaudantium.png?size=50x50&set=set1',
    email: 'dsleee@mapquest.com',
    company: '퀄슨',
    introduction: 'VP Sales',
  },
  {
    name: '김학노',
    imageUrl:
      'https://robohash.org/veritatismolestiaeerror.png?size=50x50&set=set1',
    email: 'yredfernf@hubpages.com',
    company: '클루피(주)',
    introduction: 'Programmer III',
  },
  {
    name: '정동혁',
    imageUrl: 'https://robohash.org/etomnisat.png?size=50x50&set=set1',
    email: 'aknollerg@gravatar.com',
    company: '클루피(주)',
    introduction: 'Recruiter',
  },
  {
    name: '권순관',
    imageUrl:
      'https://robohash.org/omnisaccusantiumoccaecati.png?size=50x50&set=set1',
    email: 'smassimih@army.mil',
    company: '피플펀드컴퍼니',
    introduction: 'Computer Systems Analyst II',
  },
  {
    name: '신민수',
    imageUrl: 'https://robohash.org/solutacommodiaut.png?size=50x50&set=set1',
    email: 'ncaddingi@networksolutions.com',
    company: '팀오투',
    introduction: 'Media Manager II',
  },
  {
    name: '강민석',
    imageUrl:
      'https://robohash.org/dolorumautcupiditate.png?size=50x50&set=set1',
    email: 'pballj@weibo.com',
    company: '팀블라인드',
    introduction: 'Accountant IV',
  },
  {
    name: '최석준',
    imageUrl: 'https://robohash.org/inadrem.png?size=50x50&set=set1',
    email: 'sharhoff2p@slashdot.org',
    company: '차케어',
    introduction: 'VP Quality Control',
  },
  {
    name: '이효성',
    imageUrl: 'https://robohash.org/quiillumvoluptas.png?size=50x50&set=set1',
    email: 'aearlam2q@macromedia.com',
    company: '자이닉스',
    introduction: 'VP Quality Control',
  },
  {
    name: '최웅규',
    imageUrl: 'https://robohash.org/estnoneius.png?size=50x50&set=set1',
    email: 'ckintish2r@uol.com.br',
    company: '자이닉스',
    introduction: 'Web Designer III',
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
        userList.map(({ name, imageUrl, email, company, introduction }, i) => (
          <UserCard
            key={i}
            name={name}
            imageUrl={imageUrl}
            email={email}
            company={company}
            introduction={introduction}
          />
        ))
      )}
    </UserList>
  );
};
