import styled from '@emotion/styled';
import pallete from 'shared/Pallete';

export const WorkerList = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-bottom: 1.5rem;
  height: calc(100% - 9.25rem);
  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
  border-radius: 0.625rem 0.625rem 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const StatusMessage = styled.p`
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  line-height: 1.2;
  color: ${pallete.scheme.paragraph};
`;
