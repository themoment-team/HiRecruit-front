import Image from 'next/image';
import Link from 'next/link';
import styled from '@emotion/styled';

import pallete from 'shared/Pallete';

interface MarkerProps {
  companyName: string;
  companyLink: string;
}

const ProfileImage = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 33%;
  overflow: hidden;
  background-color: ${pallete.scheme.gray};
`;

const Marker = styled.div`
  padding: 0.6rem;
  background-color: ${pallete.scheme.white};
  border-radius: 10px;
  transform: translateY(-10px);
  .stilettos {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, 0);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 16px;
    border-color: ${pallete.scheme.white} transparent transparent transparent;
  }
`;

const CompanyIntroBox = styled.div`
  display: flex;
  gap: 0.4rem;
  max-width: 12.5rem;
  .companyName {
    font-size: 0.875rem;
  }
  .companyProfile {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    margin-top: 0.4rem;
  }
  .companyLink {
    width: fit-content;
    font-size: 0.75rem;
    color: ${pallete.scheme.blue};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const CompanyButton = styled.button<{ secondary?: boolean }>`
  border: none;
  width: 100%;
  height: 2rem;
  margin-top: 0.6rem;
  text-align: center;
  font-weight: 600;
  border-radius: 0.563rem;
  cursor: pointer;
  color: ${pallete.scheme.white};
  background-color: ${pallete.scheme.blue};
  &:active {
    transform: scale(0.98);
  }
`;

export const MarkerComponent: React.FC = () => {
  return (
    <Marker>
      <div className="stilettos" />
      <CompanyIntroBox>
        <ProfileImage>
          <Image
            src={'https://github.com/jyeonjyan.png'}
            alt={`회사 로고`}
            width={40}
            height={40}
            layout="responsive"
          />
        </ProfileImage>
        <article className="companyProfile">
          <p className="companyName">영광 굴비정식 중앙식당</p>
          <Link href="https://toss.im" passHref>
            <a className="companyLink" target="_blank" rel="noreferrer">
              회사 웹사이트
            </a>
          </Link>
        </article>
      </CompanyIntroBox>
      <CompanyButton>이 회사로 검색하기</CompanyButton>
    </Marker>
  );
};
