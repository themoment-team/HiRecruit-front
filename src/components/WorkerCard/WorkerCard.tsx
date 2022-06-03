import styled from '@emotion/styled';
import Image from 'next/image';
import { useCallback } from 'react';
import { useMap } from 'react-kakao-maps-sdk';

import pallete from 'shared/Pallete';
import { Button } from 'components/common/Button';
import useCoord from 'hooks/use-coord';

interface WorkerCardProps {
  name: string;
  email: string;
  introduction: string;
  profileImgUri: string;
  devYear: number;
  position: string;
  companyName: string;
  location: string;
}

const WorkerCard = styled.div`
  width: 100%;
  border-radius: 0.5rem;
  padding: 1.5rem;
  background: ${pallete.scheme.white};
`;

const ProfileImage = styled.div`
  width: 4.25rem;
  height: 4.25rem;
  border-radius: 33%;
  overflow: hidden;
  background-color: ${pallete.scheme.gray};
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileParagraph = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.313rem;
  padding-left: 1.5rem;
  .name {
    font-weight: 600;
    font-size: 1.125rem;
    color: ${pallete.scheme.black};
  }
  .email {
    font-size: 0.85rem;
    color: ${pallete.scheme.blue};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  .company {
    font-size: 0.8rem;
  }
`;

const IntroduceCard = styled.div`
  width: 100%;
  height: auto;
  padding: 0.75rem;
  margin-top: 1.25rem;
  background-color: ${pallete.scheme.gray};
  border-radius: 0.5rem;
  p {
    color: ${pallete.scheme.paragraph};
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.25;
  }
`;

const WorkerButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1.25rem;
  gap: 0.8rem;
`;

const WorkerPosition = styled.span`
  color: ${pallete.scheme.blue};
`;

export const WorkerCardComponent: React.FC<WorkerCardProps> = ({
  name,
  email,
  introduction,
  profileImgUri,
  devYear,
  position,
  companyName,
  location,
}) => {
  const map = useMap();
  const { lat, lng } = useCoord(map, location);

  const subString = useCallback((str: string, n: number): string => {
    return str?.length > n ? `${str.substring(0, n)}...` : str;
  }, []);

  const panTo = (lat: number, lng: number) => {
    if (map) {
      const moveCoord = new kakao.maps.LatLng(lat, lng);

      map.setLevel(3);
      map.panTo(moveCoord);
    }
  };

  return (
    <WorkerCard>
      <ProfileWrapper>
        <ProfileImage>
          <Image
            src={profileImgUri}
            alt={`${name}님의 프로필 사진`}
            width={60}
            height={60}
            layout="responsive"
          />
        </ProfileImage>
        <ProfileParagraph>
          <p className="name">{subString(name, 14)}</p>
          <a className="email" href={`mailto:${email}`}>
            {subString(email, 25)}
          </a>
          <p className="company">{subString(companyName, 18)}</p>
        </ProfileParagraph>
      </ProfileWrapper>
      {!!introduction && (
        <IntroduceCard>
          <p>
            <WorkerPosition>{`${devYear}년차 ${position}`}</WorkerPosition>
            <br />
            {introduction}
          </p>
        </IntroduceCard>
      )}
      <WorkerButtonWrapper>
        <Button
          onClick={() => {
            if (lat && lng) panTo(lat, lng);
          }}
        >
          회사 위치
        </Button>
      </WorkerButtonWrapper>
    </WorkerCard>
  );
};
