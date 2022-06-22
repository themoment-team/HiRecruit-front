import styled from '@emotion/styled';

import pallete from 'shared/Pallete';

export const WorkerCard = styled.div`
  width: 100%;
  border-radius: 0.5rem;
  padding: 1.5rem;
  background: ${pallete.scheme.white};
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileParagraph = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.313rem;
  padding-left: 1.5rem;
  .name {
    font-weight: 600;
    font-size: 1.125rem;
    color: ${pallete.scheme.black};
    display: flex;
    align-items: center;
    gap: 0.2rem;
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

export const IntroduceCard = styled.div`
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

export const WorkerButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1.25rem;
  gap: 0.8rem;
`;

export const WorkerPosition = styled.span`
  color: ${pallete.scheme.blue};
`;
