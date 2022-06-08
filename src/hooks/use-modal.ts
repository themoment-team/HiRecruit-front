import {
  Dispatch,
  RefObject,
  SetStateAction,
  useCallback,
  useRef,
} from 'react';

const useModal = (
  setModalVisible: Dispatch<SetStateAction<boolean>>,
): [RefObject<HTMLDivElement>, (e: MouseEvent) => void] => {
  const el: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  const clickOutside = useCallback(
    (e: MouseEvent): void => {
      if (el.current && !el.current.contains(e.target as Node)) {
        setModalVisible(false);
      }
    },
    [setModalVisible],
  );

  return [el, clickOutside];
};

export default useModal;
