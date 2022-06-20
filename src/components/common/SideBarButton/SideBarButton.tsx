import { Dispatch, SetStateAction } from 'react';

import { RightArrow } from 'assets/icons/RightArrow';

import { SideBarButtonWrapper } from './SideBarButton.styles';

interface SideBarButtonProps {
  calloutText: string;
  setProfileModalVisible: Dispatch<SetStateAction<boolean>>;
}

export const SideBarButtonComponent: React.FC<SideBarButtonProps> = ({
  calloutText,
  setProfileModalVisible,
}) => {
  return (
    <>
      <SideBarButtonWrapper onClick={() => setProfileModalVisible(true)}>
        <span>{calloutText}</span>
        <RightArrow />
      </SideBarButtonWrapper>
    </>
  );
};
