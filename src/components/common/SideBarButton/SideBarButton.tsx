import { Building } from 'assets/icons/Building';
import { HumanHead } from 'assets/icons/HumanHead';
import { RightArrow } from 'assets/icons/RightArrow';
import pallete from 'shared/Pallete';

import { SideBarButtonWrapper } from './SideBarButton.styles';

interface SideBarButtonProps {
  calloutText: string;
  trigger: () => void;
  userRules: string;
}

export const SideBarButtonComponent: React.FC<SideBarButtonProps> = ({
  calloutText,
  trigger,
  userRules,
}) => {
  return (
    <>
      {userRules === 'GUEST' && (
        <SideBarButtonWrapper GUEST onClick={() => trigger()}>
          <Building />
          <p>{calloutText}</p>
          <span>
            <RightArrow />
          </span>
        </SideBarButtonWrapper>
      )}
      {userRules === 'WORKER' && (
        <SideBarButtonWrapper onClick={() => trigger()}>
          <HumanHead />
          <p>{calloutText}</p>
          <span>
            <RightArrow color={pallete.scheme.green} />
          </span>
        </SideBarButtonWrapper>
      )}
    </>
  );
};
