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
          <span className="text-wrapper">
            <Building />
            <p>{calloutText}</p>
          </span>
          <span>
            <RightArrow />
          </span>
        </SideBarButtonWrapper>
      )}
      {userRules === 'WORKER' && (
        <SideBarButtonWrapper onClick={() => trigger()}>
          <span className="text-wrapper">
            <HumanHead />
            <p>{calloutText}</p>
          </span>
          <span>
            <RightArrow color={pallete.scheme.green} />
          </span>
        </SideBarButtonWrapper>
      )}
    </>
  );
};
