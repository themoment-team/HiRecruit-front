import { useRouter } from 'next/router';
import styled from '@emotion/styled';

import pallete from 'shared/Pallete';
import { Button } from 'components/common/Button';

interface MarkerProps {
  companyName: string;
  companyUri: string;
  imageUri: string;
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
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.75rem;
  overflow: hidden;
  background-color: ${pallete.scheme.gray};
`;

const ProfileImageAltText = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${pallete.scheme.darkgray};
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
  #companyUri {
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
  companyUri,
  imageUri,
}) => {
  const router = useRouter();

  return (
    <CustomMapMarker>
      <div className="stilettos" />
      <ProfileImage>
        {imageUri ? (
          <img src={imageUri} alt={`${companyName} 회사 로고`} height="100%" />
        ) : (
          <ProfileImageAltText>
            회사 이미지가 존재하지 않아요
          </ProfileImageAltText>
        )}
      </ProfileImage>
      <CompanyIntroBox>
        <article className="companyProfile">
          <p id="companyName">{companyName}</p>
          <a id="companyUri" target="_blank" href={companyUri} rel="noreferrer">
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
