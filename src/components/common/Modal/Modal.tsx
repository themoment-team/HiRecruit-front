import { Dispatch, SetStateAction, useEffect } from 'react';
import styled from '@emotion/styled';

import useModal from 'hooks/use-modal';
import pallete from 'shared/Pallete';

interface ModalProps {
  children: React.ReactNode;
  set: Dispatch<SetStateAction<boolean>>;
}

const ModalContent = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${pallete.scheme.white};
  border-radius: 10px;
  max-width: 1060px;
  max-height: 680px;
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${pallete.scheme.gray + '55'};
  backdrop-filter: saturate(180%) blur(20px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalComponent = ({ children, set }: ModalProps): JSX.Element => {
  const [el, clickOutside] = useModal(set);

  useEffect(() => {
    document.addEventListener('mousedown', clickOutside);
    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  }, [clickOutside]);

  return (
    <ModalBackground>
      <ModalContent ref={el}>{children}</ModalContent>
    </ModalBackground>
  );
};
