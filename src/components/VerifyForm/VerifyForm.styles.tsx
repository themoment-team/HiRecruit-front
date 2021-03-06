import styled from '@emotion/styled';

import { Input as CommonInput } from 'components/common/Input';
import { Button as CommonButton } from 'components/common/Button';
import { boundInDown } from 'shared/Animation.style';
import pallete from 'shared/Pallete';

export const Input = styled(CommonInput)`
  outline: none;
  border: 2px solid ${pallete.scheme.blue};
  margin: 1rem 0;
  width: 18rem;
  height: 3rem;
  font-size: 1rem;
  &::placeholder {
    transition: unset;
  }
  &:focus {
    outline: none;
  }
  @media (max-width: 500px) {
    width: 12rem;
  }
`;

export const VerifyFormHeader = styled.div`
  width: 100%;
  font-size: 1.125rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 0.75rem;
  color: ${pallete.scheme.paragraph};
`;

export const VerifyFormWrapper = styled.span`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${pallete.scheme.white};
  border-radius: 0.625rem;
  animation: ${boundInDown} 0.6s ease;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const VerifyForm = styled.form`
  padding: 2rem;
`;

export const VerifyButton = styled.button`
  width: 100%;
  border-radius: 1.5rem;
  font-weight: 500;
  color: ${pallete.scheme.red};
  border: 2px solid ${pallete.scheme.red};
  background-color: ${pallete.scheme.white};
  padding: 0.75rem;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  gap: 1rem;
  @media (max-width: 500px) {
    gap: 0.6rem;
  }
`;

export const CancelButton = styled.button`
  width: 100%;
  border-radius: 1.5rem;
  font-weight: 500;
  color: ${pallete.scheme.red};
  border: 2px solid ${pallete.scheme.red};
  background-color: ${pallete.scheme.white};
  padding: 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
`;

export const Submit = styled.input`
  width: 100%;
  border-radius: 1.5rem;
  font-weight: 500;
  color: ${pallete.scheme.white};
  padding: 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  background-color: ${pallete.scheme.blue};
  border: none;
  cursor: pointer;
`;

export const EmailButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  @media (max-width: 500px) {
    gap: 0.6rem;
  }
`;

export const EmailButton = styled(CommonButton)`
  width: 8rem;
  height: 3rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const WarningText = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  color: ${pallete.scheme.paragraph};
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;
