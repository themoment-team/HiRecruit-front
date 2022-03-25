import styled from '@emotion/styled';
import Image from 'next/image';
import { useCallback } from 'react';

import pallete from 'shared/Pallete';

interface UserCardProps {
  name: string;
  githubId: string;
  email: string;
  company: string;
  introduction: string;
}

const UserCard = styled.div`
  width: 18.75rem;
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin-top: 10rem;
  background: ${pallete.scheme.white};
`;

const ProfileImage = styled.div`
  width: 3.75rem;
  height: 3.75rem;
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
    color: ${pallete.scheme.black};
  }
  .email {
    font-size: 0.75rem;
    color: ${pallete.scheme.blue};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  .company {
    font-size: 0.7rem;
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
    font-size: 0.765rem;
    font-weight: 500;
    line-height: 1.25;
    word-break: keep-all;
  }
`;

export const UserCardComponent: React.FC<UserCardProps> = ({
  name,
  githubId,
  email,
  company,
  introduction,
}) => {
  const subString = useCallback((str: string, n: number): string => {
    return str.length > n ? `${str.substring(0, n)}...` : str;
  }, []);

  return (
    <UserCard>
      <ProfileWrapper>
        <ProfileImage>
          <Image
            src={`https://github.com/${githubId}.png`}
            alt={`${name}님의 프로필 사진`}
            width={60}
            height={60}
            layout="responsive"
          />
        </ProfileImage>
        <ProfileParagraph>
          <p className="name">{subString(name, 8)}</p>
          <a className="email" href={`mailto:${email}`}>
            {subString(email, 20)}
          </a>
          <p className="company">{subString(company, 15)}</p>
        </ProfileParagraph>
      </ProfileWrapper>
      {!!introduction && (
        <IntroduceCard>
          <p>{introduction}</p>
        </IntroduceCard>
      )}
    </UserCard>
  );
};
