import { Header } from 'components/common/Header';

import { MobileWrapper } from './Mobile.styles';

interface MobileMapProps {
  cookies: {
    [key: string]: string;
  };
}

export const MobileMapComponent: React.FC<MobileMapProps> = ({ cookies }) => {
  return (
    <MobileWrapper>
      <Header
        userRules={'GUEST'}
        menuVisible={false}
        setMenuVisible={function (value: SetStateAction<boolean>): void {
          throw new Error('Function not implemented.');
        }}
      />
    </MobileWrapper>
  );
};
