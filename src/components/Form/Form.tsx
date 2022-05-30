import styled from '@emotion/styled';
import { useForm, SubmitHandler } from 'react-hook-form';

import { Input as commonInput } from 'components/common/Input';
import pallete from 'shared/Pallete';

interface Inputs {
  name: string;
  email: string;
  position: string;
  company: string;
  companyLocation: string;
  introduction: string;
  devYear: string;
}

const Form = styled.form`
  max-width: 28rem;
  padding: 2rem;
`;

const FormHeader = styled.div`
  width: 100%;
  font-size: 1.125rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 0.75rem;
  color: ${pallete.scheme.paragraph};
`;

const Input = styled(commonInput)`
  outline: none;
  border: 2px solid ${pallete.scheme.blue};
  margin: 1rem 0;
  &::placeholder {
    transition: unset;
  }
  &:focus {
    outline: none;
  }
`;

const SelectInput = styled.select`
  width: 100%;
  height: 2.75rem;
  font-size: 0.925rem;
  font-weight: 500;
  color: ${pallete.scheme.paragraph};
  caret-color: ${pallete.scheme.paragraph};
  padding: 0.25rem 0.5rem;
  margin: 1rem 0;
  border-radius: 0.625rem;
  border: 2px solid ${pallete.scheme.blue};
  outline: none;
  option {
    color: ${pallete.scheme.paragraph};
  }
`;

const SubmitInput = styled.input`
  width: 100%;
  border-radius: 1.5rem;
  font-weight: 500;
  color: ${pallete.scheme.white};
  padding: 0.75rem;
  margin-top: 1rem;
  font-size: 1.125rem;
  font-weight: 600;
  background-color: ${pallete.scheme.blue};
  border: none;
  cursor: pointer;
`;

const positionOptions: { value: string; label: string }[] = [
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

const generateKey = {
  name: '이름',
  email: '이메일',
  position: '직군',
  company: '회사명',
  companyLocation: '회사 도로명 주소',
  introduction: '한줄 소개',
  devYear: '연차',
};

export const FormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => {
    const entries = Object.entries(data);
    const allNotFilled = entries.some(([key, value]) => {
      if (value === '') {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        alert(`${generateKey[key]}의 값이 비어있습니다.`);
        return true;
      }
    });

    if (!allNotFilled) {
      console.log(data);
      alert('제출되었습니다.');
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormHeader>회원가입</FormHeader>
      <Input
        placeholder="이름"
        {...register('name')}
        type="name"
        maxLength={100}
      />
      <Input
        placeholder="이메일"
        {...register('email')}
        type="email"
        maxLength={100}
      />
      <SelectInput {...register('position')}>
        {positionOptions.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </SelectInput>
      <Input
        placeholder="연차"
        {...register('devYear')}
        type="number"
        maxLength={100}
      />
      <Input
        placeholder="회사명"
        {...register('company')}
        type="text"
        maxLength={100}
      />
      <Input
        placeholder="회사 도로명 주소"
        {...register('companyLocation')}
        type="address"
        maxLength={100}
      />
      <Input
        placeholder="한줄 소개"
        {...register('introduction')}
        type="text"
        maxLength={100}
      />
      <SubmitInput type="submit" value={'완료'} />
    </Form>
  );
};
