import styled from '@emotion/styled';
import pallete from 'shared/Pallete';

export const SideBarButtonWrapper = styled.button`
  width: 100%;
  height: 2.5rem;
  padding: 0.8rem;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.563rem;
  font-weight: 600;
  border: none;
  background-color: aliceblue;
  color: ${pallete.scheme.blue};
  cursor: pointer;
`;
