import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';

import pallete from 'shared/Pallete';
import { Input as commonInput } from 'components/common/Input';
import { Select } from 'components/common/Select';

import { positionOptionList, onSubmit, InputListType } from './container';

const FormWrapper = styled.span`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${pallete.scheme.white};
  border-radius: 10px;
  max-width: 1060px;
  max-height: 680px;
`;

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

export const FormComponent = () => {
  const { register, handleSubmit } = useForm<InputListType>();

  return (
    <FormWrapper>
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
        <Select {...register('position')} optionList={positionOptionList} />
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
          disabled
        />
        <Input
          placeholder="한줄 소개"
          {...register('introduction')}
          type="text"
          maxLength={100}
        />
        <SubmitInput type="submit" value={'완료'} />
      </Form>
    </FormWrapper>
  );
};
