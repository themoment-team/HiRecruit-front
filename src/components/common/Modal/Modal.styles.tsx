import styled from '@emotion/styled';
import pallete from 'shared/Pallete';

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${pallete.scheme.black + '88'};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;
