interface MobileMapProps {
  cookies: {
    [key: string]: string;
  };
}

export const MobileMapComponent: React.FC<MobileMapProps> = ({ cookies }) => {
  return <div>Mobile Map</div>;
};
