import { useMemo } from 'react';

import pallete from 'shared/Pallete';

type logoColorToken = 'white' | 'black' | 'blue';
type logoSizeToken = 'small' | 'medium';

interface LogoProps {
  logoColor: logoColorToken;
  size?: logoSizeToken;
}

export const Logo: React.FC<React.SVGProps<SVGSVGElement> & LogoProps> = ({
  logoColor,
  size,
}) => {
  const genedLogoColor = useMemo(() => {
    switch (logoColor) {
      case 'white':
        return pallete.scheme.white;
      case 'black':
        return pallete.scheme.black;
      case 'blue':
        return pallete.scheme.blue;
      default:
        return pallete.scheme.black;
    }
  }, [logoColor]);

  const { width, height } = useMemo(() => {
    switch (size) {
      case 'small':
        return { width: '63', height: '25' };
      case 'medium':
        return { width: '100', height: '40' };
      default:
        return { width: '63', height: '25' };
    }
  }, [size]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      zoomAndPan="magnify"
      viewBox="0 0 150 60"
      preserveAspectRatio="xMidYMid meet"
      version="1.0"
    >
      <defs>
        <g />
      </defs>
      <g fill={genedLogoColor} fillOpacity="1">
        <g transform="translate(2.221752, 54.251112)">
          <g>
            <path d="M 0 0 L 9.683594 0 L 9.683594 -19.367188 L 0 -19.367188 Z M 58.101562 0 L 67.785156 0 L 67.785156 -19.367188 L 58.101562 -19.367188 Z M 9.683594 -19.367188 L 58.101562 -19.367188 L 58.101562 -29.050781 L 9.683594 -29.050781 Z M 0 -29.050781 L 9.683594 -29.050781 L 9.683594 -48.417969 L 0 -48.417969 Z M 58.101562 -29.050781 L 67.785156 -29.050781 L 67.785156 -48.417969 L 58.101562 -48.417969 Z M 58.101562 -29.050781 " />
          </g>
        </g>
      </g>
      <g fill={genedLogoColor} fillOpacity="1">
        <g transform="translate(79.686536, 54.251112)">
          <g>
            <path d="M 0 0 L 9.683594 0 L 9.683594 -19.367188 L 0 -19.367188 Z M 9.683594 -19.367188 L 58.101562 -19.367188 L 58.101562 -29.050781 L 9.683594 -29.050781 Z M 58.101562 -29.050781 L 67.785156 -29.050781 L 67.785156 -38.734375 L 58.101562 -38.734375 Z M 0 -38.734375 L 58.101562 -38.734375 L 58.101562 -48.417969 L 0 -48.417969 Z M 58.101562 0 L 67.785156 0 L 67.785156 -19.367188 L 58.101562 -19.367188 Z M 58.101562 0 " />
          </g>
        </g>
      </g>
    </svg>
  );
};
