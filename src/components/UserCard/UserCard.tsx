import styled from '@emotion/styled';
import Image from 'next/image';
import { useCallback } from 'react';

import pallete from 'shared/Pallete';
import { UserData as UserCardProps } from 'shared/Type';
import { Button } from 'components/common/Button';

const UserCard = styled.div`
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

const UserButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1.25rem;
  gap: 0.8rem;
`;

export const UserCardComponent: React.FC<UserCardProps> = ({
  name,
  imageUrl,
  email,
  company,
  introduction,
  location,
  year,
}) => {
  const subString = useCallback((str: string, n: number): string => {
    return str.length > n ? `${str.substring(0, n)}...` : str;
  }, []);

  return (
    <UserCard>
      <ProfileWrapper>
        <ProfileImage>
          <Image
            src={imageUrl}
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
          <p className="company">
            {subString(company, 18)}
            {year && ` • ${year}년차`}
          </p>
        </ProfileParagraph>
      </ProfileWrapper>
      {!!introduction && (
        <IntroduceCard>
          <p>{introduction}</p>
        </IntroduceCard>
      )}
      <UserButtonWrapper>
        <Button>회사 위치</Button>
        <Button secondary>연결 신청</Button>
      </UserButtonWrapper>
    </UserCard>
  );
};
