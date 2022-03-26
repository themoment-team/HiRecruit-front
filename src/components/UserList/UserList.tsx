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
    name: 'Berkley Mapam',
    imageUrl:
      'https://robohash.org/praesentiumautsimilique.png?size=50x50&set=set1',
    email: 'bmapam0@netscape.com',
    company: 'Ozu',
    introduction: 'Software Consultant',
  },
  {
    name: 'Sianna Inde',
    imageUrl: 'https://robohash.org/odiosuntaut.png?size=50x50&set=set1',
    email: 'sinde1@canalblog.com',
    company: 'Brightdog',
    introduction: 'Quality Control Specialist',
  },
  {
    name: 'Kelsey McMichan',
    imageUrl: 'https://robohash.org/doloresfugitet.png?size=50x50&set=set1',
    email: 'kmcmichan2@artisteer.com',
    company: 'Rhyzio',
    introduction: 'Technical Writer',
  },
  {
    name: 'Mortimer Hebner',
    imageUrl: 'https://robohash.org/quasivitaevelit.png?size=50x50&set=set1',
    email: 'mhebner3@nps.gov',
    company: 'Eidel',
    introduction: 'Business Systems Development Analyst',
  },
  {
    name: 'Maryanne Harriot',
    imageUrl: 'https://robohash.org/rerumetqui.png?size=50x50&set=set1',
    email: 'mharriot4@amazon.de',
    company: 'Voonte',
    introduction: 'Developer IV',
  },
  {
    name: 'Padraig Sparkes',
    imageUrl:
      'https://robohash.org/laboreexcepturinesciunt.png?size=50x50&set=set1',
    email: 'psparkes5@cbc.ca',
    company: 'Kwilith',
    introduction: 'Analog Circuit Design manager',
  },
  {
    name: 'Lisette Cheson',
    imageUrl: 'https://robohash.org/eamollitiadebitis.png?size=50x50&set=set1',
    email: 'lcheson6@nhs.uk',
    company: 'Youbridge',
    introduction: 'Financial Advisor',
  },
  {
    name: 'Cob Orrobin',
    imageUrl:
      'https://robohash.org/impeditnesciuntdeleniti.png?size=50x50&set=set1',
    email: 'corrobin7@taobao.com',
    company: 'Avavee',
    introduction: 'Product Engineer',
  },
  {
    name: 'Tris Polglase',
    imageUrl: 'https://robohash.org/autporroquaerat.png?size=50x50&set=set1',
    email: 'tpolglase8@dmoz.org',
    company: 'Voomm',
    introduction: 'Actuary',
  },
  {
    name: 'Valene Cicculini',
    imageUrl:
      'https://robohash.org/inciduntmolestiaeest.png?size=50x50&set=set1',
    email: 'vcicculini9@noaa.gov',
    company: 'Thoughtsphere',
    introduction: 'Professor',
  },
  {
    name: 'Bill Bartolozzi',
    imageUrl:
      'https://robohash.org/pariaturetreprehenderit.png?size=50x50&set=set1',
    email: 'bbartolozzia@nationalgeographic.com',
    company: 'Abatz',
    introduction: 'Accountant III',
  },
  {
    name: 'Cathie Cogar',
    imageUrl: 'https://robohash.org/adbeataequae.png?size=50x50&set=set1',
    email: 'ccogarb@photobucket.com',
    company: 'Edgetag',
    introduction: 'Compensation Analyst',
  },
  {
    name: 'Trip Geall',
    imageUrl: 'https://robohash.org/utsapientehic.png?size=50x50&set=set1',
    email: 'tgeallc@shareasale.com',
    company: 'Linkbridge',
    introduction: 'Marketing Manager',
  },
  {
    name: 'Katlin Mitrikhin',
    imageUrl: 'https://robohash.org/providentestea.png?size=50x50&set=set1',
    email: 'kmitrikhind@chron.com',
    company: 'Vinte',
    introduction: 'Web Designer II',
  },
  {
    name: 'Donetta Slee',
    imageUrl: 'https://robohash.org/autoditlaudantium.png?size=50x50&set=set1',
    email: 'dsleee@mapquest.com',
    company: 'Zoozzy',
    introduction: 'VP Sales',
  },
  {
    name: 'Yolanda Redfern',
    imageUrl:
      'https://robohash.org/veritatismolestiaeerror.png?size=50x50&set=set1',
    email: 'yredfernf@hubpages.com',
    company: 'Yotz',
    introduction: 'Programmer III',
  },
  {
    name: 'Adelind Knoller',
    imageUrl: 'https://robohash.org/etomnisat.png?size=50x50&set=set1',
    email: 'aknollerg@gravatar.com',
    company: 'Jabberstorm',
    introduction: 'Recruiter',
  },
  {
    name: 'Sylvester Massimi',
    imageUrl:
      'https://robohash.org/omnisaccusantiumoccaecati.png?size=50x50&set=set1',
    email: 'smassimih@army.mil',
    company: 'Voomm',
    introduction: 'Computer Systems Analyst II',
  },
  {
    name: 'Noble Cadding',
    imageUrl: 'https://robohash.org/solutacommodiaut.png?size=50x50&set=set1',
    email: 'ncaddingi@networksolutions.com',
    company: 'Gabvine',
    introduction: 'Media Manager II',
  },
  {
    name: 'Pierce Ball',
    imageUrl:
      'https://robohash.org/dolorumautcupiditate.png?size=50x50&set=set1',
    email: 'pballj@weibo.com',
    company: 'Topicware',
    introduction: 'Accountant IV',
  },
  {
    name: 'Sosanna Harhoff',
    imageUrl: 'https://robohash.org/inadrem.png?size=50x50&set=set1',
    email: 'sharhoff2p@slashdot.org',
    company: 'Kwideo',
    introduction: 'VP Quality Control',
  },
  {
    name: 'Antonietta Earlam',
    imageUrl: 'https://robohash.org/quiillumvoluptas.png?size=50x50&set=set1',
    email: 'aearlam2q@macromedia.com',
    company: 'Voonte',
    introduction: 'VP Quality Control',
  },
  {
    name: 'Celina Kintish',
    imageUrl: 'https://robohash.org/estnoneius.png?size=50x50&set=set1',
    email: 'ckintish2r@uol.com.br',
    company: 'Divavu',
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
