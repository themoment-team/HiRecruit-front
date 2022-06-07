import styled from '@emotion/styled';
import Image from 'next/image';

import pallete from 'shared/Pallete';

interface ProfileImageProps {
  imageUri: string;
  alt: string;
}

const ProfileImage = styled.div`
  width: 4.25rem;
  height: 4.25rem;
  border-radius: 33%;
  overflow: hidden;
  background-color: ${pallete.scheme.gray};
`;

export const ProfileImageComponent: React.FC<ProfileImageProps> = ({
  imageUri,
  alt,
}) => {
  return (
    <ProfileImage>
      <Image
        src={imageUri}
        alt={alt}
        width={50}
        height={50}
        layout="responsive"
      />
    </ProfileImage>
  );
};
