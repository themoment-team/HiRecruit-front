import { RightArrow } from 'assets/icons/RightArrow';

import { SideBarButtonWrapper } from './SideBarButton.styles';

interface SideBarButtonProps {
  calloutText: string;
}

export const SideBarButtonComponent: React.FC<SideBarButtonProps> = ({
  calloutText,
}) => {
  return (
    <SideBarButtonWrapper>
      <span>{calloutText}</span>
      <RightArrow />
    </SideBarButtonWrapper>
  );
};
