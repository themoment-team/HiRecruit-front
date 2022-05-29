import styled from '@emotion/styled';
import { Logo } from 'assets/Logo';
import { Input as commonInput } from 'components/common/Input';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import pallete from 'shared/Pallete';

interface Inputs {
  exampleasdf: string;
  exampleRequired: string;
}

const Form = styled.form`
  max-width: 28rem;
  padding: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
`;

const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 1.25rem;
`;

const Input = styled(commonInput)`
  outline: 2px solid ${pallete.scheme.blue};
  margin: 1rem 0;
`;

const SubmitInput = styled.input`
  width: 100%;
  border-radius: 0.625rem;
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
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  console.log(watch('exampleasdf'));

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <LogoWrapper>
        <Logo logoColor="black" size="medium" />
      </LogoWrapper>
      <Input placeholder="무언가" {...register('exampleasdf')} />
      <Input placeholder="무언가" {...register('exampleRequired')} />
      <SubmitInput type="submit" value={'회원가입'} />
    </Form>
  );
};
