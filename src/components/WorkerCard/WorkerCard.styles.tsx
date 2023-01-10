import styled from '@emotion/styled';

import pallete from 'shared/Pallete';

export const WorkerCard = styled.div`
  width: 100%;
  border-radius: 0.625rem;
  padding: 1.75rem;
  background: ${pallete.scheme.white};
  box-shadow: 0px 4px 20px 0px #0000000f;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileParagraph = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 1rem;
`;

export const NameBadgeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  span {
    cursor: pointer;
  }
`;

export const Name = styled.p`
  font-weight: 600;
  font-size: 1.25rem;
  margin-bottom: 4px;
  color: ${pallete.scheme.black};

  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const Email = styled.a`
  font-weight: 400;
  font-size: 0.875rem;
  margin-bottom: 11px;
  color: ${pallete.scheme.blue};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`;

export const CompanyLink = styled.a`
  font-weight: 400;
  font-size: 1rem;
  color: #000000;
  text-decoration: none;

  @media (max-width: 500px) {
    font-size: 0.875rem;
  }
`;

export const WorkerPosition = styled.span`
  color: ${pallete.scheme.blue};
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25;
  padding-bottom: 4px;
  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`;

export const IntroduceCard = styled.div`
  width: 100%;
  height: auto;
  padding: 0.875rem;
  margin-top: 1rem;
  background-color: ${pallete.scheme.gray};
  border-radius: 0.5rem;
  p {
    margin-top: 4px;
    color: ${pallete.scheme.paragraph};
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.25;
    @media (max-width: 500px) {
      font-size: 0.75rem;
    }
  }
`;

export const WorkerButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  gap: 0.8rem;
`;
