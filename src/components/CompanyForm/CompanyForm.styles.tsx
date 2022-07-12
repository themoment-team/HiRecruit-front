import styled from '@emotion/styled';

import { Button as CommonButton } from 'components/common/Button';
import { Input as CommonInput } from 'components/common/Input';
import { boundInDown } from 'shared/Animation.style';
import pallete from 'shared/Pallete';

export const FormModalBackground = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${pallete.scheme.white};
  border-radius: 0.625rem;
  animation: ${boundInDown} 0.6s ease;
`;

export const Form = styled.form`
  max-width: 28rem;
  padding: 2rem;
`;

export const FormHeader = styled.h1`
  width: 100%;
  font-size: 1.125rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 0.75rem;
  color: ${pallete.scheme.paragraph};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const Button = styled(CommonButton)`
  width: 6rem;
  height: 2.75rem;
`;

export const SlideAnimation = styled.div`
  transition: height 0.5s ease;
  overflow: hidden;
  height: 0;
`;

export const ProfileImage = styled.div`
  width: 17.25rem;
  height: 8rem;
  margin: 1rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.75rem;
  overflow: hidden;
  background-color: ${pallete.scheme.gray};
  img {
    max-width: 17.25rem;
    max-height: 8rem;
    -webkit-user-drag: none;
  }
`;

export const WarningText = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${pallete.scheme.paragraph};
  cursor: pointer;
`;

export const Input = styled(CommonInput)`
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

export const Submit = styled.input`
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
