import styled from '@emotion/styled';

import { Input as CommonInput } from 'components/common/Input';
import { boundInDown } from 'shared/Animation.style';
import pallete from 'shared/Pallete';

export const FormWrapper = styled.span`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${pallete.scheme.white};
  border-radius: 10px;
  animation: ${boundInDown} 0.6s ease;
`;

export const Form = styled.form`
  max-width: 28rem;
  padding: 2rem;
`;

export const FormHeader = styled.div`
  width: 100%;
  font-size: 1.125rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 0.75rem;
  color: ${pallete.scheme.paragraph};
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

export const SlideAnimation = styled.div`
  transition: height 0.5s ease;
  overflow: hidden;
  height: 0;
`;

export const SelectInput = styled.select`
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

export const CompanyRegister = styled.a`
  font-size: 0.8rem;
  margin-left: 1rem;
  font-weight: 600;
  transform: translateY(1rem);
  color: ${pallete.scheme.blue};
  cursor: pointer;
  span {
    font-weight: 400;
    color: ${pallete.scheme.paragraph};
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
