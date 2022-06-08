import DaumPostcode from 'react-daum-postcode';
import { handleComplete, PostCodeProps } from './container';

export const PostCodeComponent: React.FC<PostCodeProps> = ({
  setAddress,
  setPostCodeVisible,
}) => {
  return (
    <DaumPostcode
      onComplete={data => {
        handleComplete(data, setAddress);
        setPostCodeVisible(false);
      }}
    />
  );
};
