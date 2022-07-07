import { useState } from 'react';
import { MobileWrapper } from './Mobile.styles';
import { BottomSheet } from 'react-spring-bottom-sheet';

interface MobileMapProps {
  cookies: {
    [key: string]: string;
  };
}

export const MobileMapComponent: React.FC<MobileMapProps> = ({ cookies }) => {
  const [open, setOpen] = useState(false);

  return (
    <MobileWrapper>
      <button onClick={() => setOpen(true)}>open</button>
      <BottomSheet open={open}>hi i am sihyeon</BottomSheet>
    </MobileWrapper>
  );
};
