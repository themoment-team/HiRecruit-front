export const CheckBadge: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.773 13.023L9 17.796L4.227 13.023C3.28301 12.079 2.64014 10.8763 2.3797 9.56689C2.11925 8.25752 2.25293 6.90032 2.76382 5.66693C3.27472 4.43353 4.13988 3.37933 5.24991 2.63764C6.35994 1.89594 7.66498 1.50006 9 1.50006C10.335 1.50006 11.6401 1.89594 12.7501 2.63764C13.8601 3.37933 14.7253 4.43353 15.2362 5.66693C15.7471 6.90032 15.8808 8.25752 15.6203 9.56689C15.3599 10.8763 14.717 12.079 13.773 13.023ZM9 9.75C9.39783 9.75 9.77936 9.59197 10.0607 9.31066C10.342 9.02936 10.5 8.64783 10.5 8.25C10.5 7.85218 10.342 7.47065 10.0607 7.18934C9.77936 6.90804 9.39783 6.75 9 6.75C8.60218 6.75 8.22065 6.90804 7.93934 7.18934C7.65804 7.47065 7.5 7.85218 7.5 8.25C7.5 8.64783 7.65804 9.02936 7.93934 9.31066C8.22065 9.59197 8.60218 9.75 9 9.75Z"
        fill="#3D9CF7"
      />
      <circle cx="9.5" cy="7.5" r="3.5" fill="#3D9CF7" />
      <path
        d="M8.33325 10.0573L11.3972 6.99298L11.8689 7.46431L8.33325 11L6.21191 8.87865L6.68325 8.40731L8.33325 10.0573Z"
        fill="white"
      />
    </svg>
  );
};
