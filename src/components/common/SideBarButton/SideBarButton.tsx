import { RightArrow } from 'assets/icons/RightArrow';

import { SideBarButtonWrapper } from './SideBarButton.styles';

interface SideBarButtonProps {
  calloutText: string;
  trigger: () => void;
}

export const SideBarButtonComponent: React.FC<SideBarButtonProps> = ({
  calloutText,
  trigger,
}) => {
  return (
    <SideBarButtonWrapper onClick={() => trigger()}>
      <span>{calloutText}</span>
      <RightArrow />
    </SideBarButtonWrapper>
  );
};
