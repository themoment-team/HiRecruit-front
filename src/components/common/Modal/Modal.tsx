import { Dispatch, SetStateAction, useEffect } from 'react';

import useModal from 'hooks/use-modal';

import * as S from './Modal.styles';

interface ModalProps {
  setModalVisible: Dispatch<SetStateAction<boolean>>;
}

export const ModalComponent: React.FC<ModalProps> = ({
  children,
  setModalVisible,
}) => {
  const [el, clickOutside] = useModal(setModalVisible);

  useEffect(() => {
    document.addEventListener('mousedown', clickOutside);
    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  }, [clickOutside]);

  return (
    <S.ModalBackground>
      <div ref={el}>{children}</div>
    </S.ModalBackground>
  );
};
