import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

import pallete from 'shared/Pallete';

interface MarkerProps {
  companyName: string;
  companyUrl: string;
  imageUrl: string;
}

const CustomMapMarker = styled.div`
  min-width: 18.75rem;
  padding: 0.75rem;
  background-color: ${pallete.scheme.white};
  border-radius: 0.75rem;
  transform: translateY(calc(-50% - 8px));
  .stilettos {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, 0);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 8px;
    border-color: ${pallete.scheme.white} transparent transparent transparent;
  }
`;

const ProfileImage = styled.div`
  width: 100%;
  height: 8rem;
  border-radius: 14px;
  overflow: hidden;
  background-color: ${pallete.scheme.gray};
`;

const CompanyIntroBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  .companyName {
    font-size: 1rem;
    font-weight: 600;
  }
  .companyProfile {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    margin-top: 0.4rem;
  }
  .companyUrl {
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
  margin-top: 0.8rem;
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

export const CustomMapMarkerComponent: React.FC<MarkerProps> = ({
  companyName,
  companyUrl,
  imageUrl,
}) => {
  const router = useRouter();

  return (
    <CustomMapMarker>
      <div className="stilettos" />
      <CompanyIntroBox>
        <ProfileImage>
          <Image
            src={imageUrl}
            alt={`${companyName} 회사 로고`}
            width={40}
            height={40}
            layout="responsive"
          />
        </ProfileImage>
        <article className="companyProfile">
          <p className="companyName">{companyName}</p>
          <a
            className="companyUrl"
            target="_blank"
            href={companyUrl}
            rel="noreferrer"
          >
            회사 웹사이트
          </a>
        </article>
      </CompanyIntroBox>
      <CompanyButton
        onClick={() => {
          router.push({
            pathname: `/`,
            query: { search: companyName },
          });
        }}
      >
        회사 검색하기
      </CompanyButton>
    </CustomMapMarker>
  );
};
