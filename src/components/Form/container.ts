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

export type KeyListType = InputListType;

export const positionOptionList = [
  '직군',
  '서버/백엔드',
  '프론트엔드',
  '웹 풀스택',
  '안드로이드 앱',
  '아이폰 앱',
  '앱 개발자',
  '디자이너',
  '머신러닝',
  '인공지능 (AI)',
  '데이터 엔지니어',
  'DBA',
  '모바일 게임',
  '게임 클라이언트',
  '게임 서버',
  '시스템/네트워크',
  '데브옵스',
  '보안',
  '임베디드 소프트웨어',
  '로보틱스 미들웨어',
  'QA',
  '사물인터넷',
  '응용 프로그램',
  '블록 체인',
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
    if (!value) {
      alert(`${keyList[key as keyof KeyListType]}의 값이 비어있습니다.`);
      return true;
    }
  });

  if (!allNotFilled) {
    console.log(data);
    alert('제출되었습니다.');
  }
};
