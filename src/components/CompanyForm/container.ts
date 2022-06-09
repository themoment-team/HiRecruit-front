import axiosClient from 'libs/axios/axiosClient';
import { SubmitHandler } from 'react-hook-form';
import toast from 'react-hot-toast';

import { CompanyReqData } from 'types/company.type';

export interface InputListType {
  companyName: string;
  companyLocation: string;
  homepageUri: string;
  companyImgUri: string;
}

export type KeyListType = InputListType;

export const keyList: KeyListType = {
  companyName: '회사명',
  companyLocation: '회사 도로명 주소',
  homepageUri: '회사 홈페이지 uri',
  companyImgUri: '회사 이미지 uri',
};

export const onSubmit: SubmitHandler<InputListType> = data => {
  const entries = Object.entries(data);
  const allNotFilled = entries.some(([key, value]) => {
    if (key === 'homepageUri') return false;
    if (key === 'companyImgUri') return false;

    if (!value) {
      toast.error(
        `${keyList[key as keyof KeyListType]}은(는) 필수로 입력해야 해요`,
      );
      return true;
    }
  });

  if (!allNotFilled) {
    // TODO: post 로직 고도화
    const reqData: CompanyReqData = {
      name: data.companyName,
      location: data.companyLocation,
      homepageUri: data.homepageUri,
      companyImgUri: data.companyImgUri,
    };

    axiosClient
      .post('/company', reqData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    toast.success('제출되었습니다.');
  }
};
