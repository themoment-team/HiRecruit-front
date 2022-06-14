import Image from 'next/image';

import * as S from './workerProfileImage.styles';

interface WorkerProfileImageProps {
  imageUri: string;
  alt: string;
}

export const WorkerProfileImageComponent: React.FC<WorkerProfileImageProps> = ({
  imageUri,
  alt,
}) => {
  return (
    <S.WorkerProfileImage>
      <Image
        src={imageUri}
        alt={alt}
        width={50}
        height={50}
        layout="responsive"
        draggable="false"
      />
    </S.WorkerProfileImage>
  );
};
