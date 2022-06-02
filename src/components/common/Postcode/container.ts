import { Dispatch, SetStateAction } from 'react';
import { Address } from 'react-daum-postcode';

export interface PostCodeProps {
  set: Dispatch<SetStateAction<string>>;
}

export const handleComplete = (
  data: Address,
  set: Dispatch<SetStateAction<string>>,
) => {
  let fullAddress = data.address;
  let extraAddress = '';

  if (data.addressType === 'R') {
    if (data.bname !== '') {
      extraAddress += data.bname;
    }
    if (data.buildingName !== '') {
      extraAddress +=
        extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
    }
    fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
  }

  set(fullAddress);
};
