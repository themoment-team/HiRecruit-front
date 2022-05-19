import styled from '@emotion/styled';
import Image from 'next/image';
import { useCallback } from 'react';

import pallete from 'shared/Pallete';
import { UserData as UserCardProps } from 'shared/Type';

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

const UserButton = styled.button<{ secondary?: boolean }>`
  border: none;
  width: 100%;
  height: 2.275rem;
  text-align: center;
  font-weight: 700;
  font-size: 0.9rem;
  border-radius: 0.563rem;
  cursor: pointer;
  color: ${pallete.scheme.white};
  background-color: ${pallete.scheme.blue};
  ${({ secondary }) =>
    secondary &&
    `
      background-color: ${pallete.scheme.white};
      color: ${pallete.scheme.blue};
      border: 2px solid ${pallete.scheme.blue};
    `};
  &:active {
    transform: scale(0.98);
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
        <UserButton>회사 위치</UserButton>
        <UserButton secondary>연결 신청</UserButton>
      </UserButtonWrapper>
    </UserCard>
  );
};
