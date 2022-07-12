import styled from '@emotion/styled';

import pallete from 'shared/Pallete';

export const WorkerProfileImage = styled.div`
  width: 4.25rem;
  height: 4.25rem;
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: ${pallete.scheme.gray};
  &:hover {
    opacity: 0.9;
    transition: opacity 0.2s;
  }
`;
