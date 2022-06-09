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
