import { SubmitHandler } from 'react-hook-form';

export interface InputListType {
  name: string;
  email: string;
  position: string;
  company: string;
  companyLocation: string;
  introduction: string;
  devYear: string;
}

export interface PositionOptionType {
  value: string;
  label: string;
}

export type KeyListType = InputListType;

export const positionOptionList: PositionOptionType[] = [
  { value: '', label: '직군' },
  { value: '서버/백엔드', label: '서버/백엔드' },
  { value: '프론트엔드', label: '프론트엔드' },
  { value: '웹 풀스택', label: '웹 풀스택' },
  { value: '안드로이드 앱', label: '안드로이드 앱' },
  { value: '아이폰 앱', label: '아이폰 앱' },
  { value: '앱 개발자', label: '앱 개발자' },
  { value: '디자이너', label: '디자이너' },
  { value: '머신러닝', label: '머신러닝' },
  { value: '인공지능 (AI)', label: '인공지능 (AI)' },
  { value: '데이터 엔지니어', label: '데이터 엔지니어' },
  { value: 'DBA', label: 'DBA' },
  { value: '모바일 게임', label: '모바일 게임' },
  { value: '게임 클라이언트', label: '게임 클라이언트' },
  { value: '게임 서버', label: '게임 서버' },
  { value: '시스템/네트워크', label: '시스템/네트워크' },
  { value: '데브옵스', label: '데브옵스' },
  { value: '보안', label: '보안' },
  { value: '임베디드 소프트웨어', label: '임베디드 소프트웨어' },
  { value: '로보틱스 미들웨어', label: '로보틱스 미들웨어' },
  { value: 'QA', label: 'QA' },
  { value: '사물인터넷', label: '사물인터넷' },
  { value: '응용 프로그램', label: '응용 프로그램' },
  { value: '블록 체인', label: '블록 체인' },
];

export const keyList: KeyListType = {
  name: '이름',
  email: '이메일',
  position: '직군',
  company: '회사명',
  companyLocation: '회사 도로명 주소',
  introduction: '한줄 소개',
  devYear: '연차',
};

export const onSubmit: SubmitHandler<InputListType> = data => {
  const entries = Object.entries(data);
  const allNotFilled = entries.some(([key, value]) => {
    if (value === '') {
      alert(`${keyList[key as keyof KeyListType]}의 값이 비어있습니다.`);
      return true;
    }
  });

  if (!allNotFilled) {
    console.log(data);
    alert('제출되었습니다.');
  }
};
