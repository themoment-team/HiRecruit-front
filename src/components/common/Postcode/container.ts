import { Dispatch, SetStateAction } from 'react';
import { Address } from 'react-daum-postcode';

export interface PostCodeProps {
  setAddress: Dispatch<SetStateAction<string>>;
  setPostCodeVisible: Dispatch<SetStateAction<boolean>>;
}

export const handleComplete = (
  data: Address,
  setAddress: Dispatch<SetStateAction<string>>,
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

  setAddress(fullAddress);
};
