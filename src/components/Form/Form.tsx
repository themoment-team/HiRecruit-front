import { useState } from 'react';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';

import { Input as commonInput } from 'components/common/Input';
import { PostCode } from 'components/common/Postcode';
import pallete from 'shared/Pallete';
import { positionOptionList, onSubmit, InputListType } from './container';
import { css } from '@emotion/react';

const FormWrapper = styled.span`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${pallete.scheme.white};
  border-radius: 10px;
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

const SlideAnimation = styled.div`
  transition: height 0.5s ease;
  overflow: hidden;
  height: 0;
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

export const FormComponent: React.FC = () => {
  const { register, handleSubmit } = useForm<InputListType>();
  const [address, setAddress] = useState<string>('');
  const [isPostCode, setIsPostCode] = useState<boolean>(false);

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
        <SelectInput {...register('position')}>
          {positionOptionList.map((opt, i) => (
            // option의 첫번째 값은 기본값으로 빈값을 반환
            <option key={opt} value={i !== 0 ? opt : ''}>
              {opt}
            </option>
          ))}
        </SelectInput>
        <Input
          placeholder="연차"
          {...register('devYear')}
          type="number"
          defaultValue={0}
          min={0}
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
          value={address}
          onClick={() => setIsPostCode(true)}
        />
        <SlideAnimation
          css={css`
            ${isPostCode &&
            css`
              height: 26rem;
            `}
          `}
        >
          {isPostCode && (
            <PostCode set={setAddress} setVisible={setIsPostCode} />
          )}
        </SlideAnimation>
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
