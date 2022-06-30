import { MobileWrapper } from './Mobile.styles';

interface MobileMapProps {
  cookies: {
    [key: string]: string;
  };
}

export const MobileMapComponent: React.FC<MobileMapProps> = ({ cookies }) => {
  return <MobileWrapper></MobileWrapper>;
};
