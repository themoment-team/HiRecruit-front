import DaumPostcode from 'react-daum-postcode';
import { handleComplete, PostCodeProps } from './container';

export const PostCodeComponent: React.FC<PostCodeProps> = ({
  set,
  setVisible,
}) => {
  return (
    <DaumPostcode
      onComplete={data => {
        handleComplete(data, set);
        setVisible(false);
      }}
    />
  );
};
