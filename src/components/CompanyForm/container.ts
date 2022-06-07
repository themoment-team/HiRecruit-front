import { SubmitHandler } from 'react-hook-form';

export interface InputListType {
  company: string;
  companyLocation: string;
  homepage: string;
  companyImg: string;
}

export type KeyListType = InputListType;

export const keyList: KeyListType = {
  company: '회사명',
  companyLocation: '회사 도로명 주소',
  homepage: '회사 홈페이지 uri',
  companyImg: '회사 이미지 uri',
};

export const onSubmit: SubmitHandler<InputListType> = data => {
  const entries = Object.entries(data);
  const allNotFilled = entries.some(([value]) => {
    if (!value) {
      alert('값이 비어있습니다.');
      return true;
    }
  });

  if (!allNotFilled) {
    console.log(data);
    alert('제출되었습니다.');
  }
};