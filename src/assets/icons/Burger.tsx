import pallete from 'shared/Pallete';

export const Burger: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={pallete.scheme.blue}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z" />
    </svg>
  );
};
