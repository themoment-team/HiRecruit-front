import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

import pallete from 'shared/Pallete';
import { Button } from 'components/common/Button';

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
  .companyProfile {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    margin: 0.6rem 0;
  }
  #companyName {
    font-size: 1rem;
    font-weight: 600;
  }
  #companyUrl {
    width: fit-content;
    font-size: 0.75rem;
    color: ${pallete.scheme.blue};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
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
      <ProfileImage>
        <Image
          src={imageUrl}
          alt={`${companyName} 회사 로고`}
          width={40}
          height={40}
          layout="responsive"
        />
      </ProfileImage>
      <CompanyIntroBox>
        <article className="companyProfile">
          <p id="companyName">{companyName}</p>
          <a id="companyUrl" target="_blank" href={companyUrl} rel="noreferrer">
            회사 웹사이트
          </a>
        </article>
      </CompanyIntroBox>
      <Button
        onClick={() => {
          router.push({
            pathname: `/`,
            query: { search: companyName },
          });
        }}
      >
        이 회사에 재직중인 사람들
      </Button>
    </CustomMapMarker>
  );
};
