import { useState } from 'react';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';

import { Input as commonInput } from 'components/common/Input';
import { Button } from 'components/common/Button';
import pallete from 'shared/Pallete';
import { Warning } from 'assets/Warning';
import { onSubmit, InputListType } from './container';
import { PostCode } from 'components/common/Postcode';

const FormWrapper = styled.span`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${pallete.scheme.white};
  border-radius: 10px;
  max-width: 66.25rem;
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

const AddressWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const AddressButton = styled(Button)`
  width: 6rem;
  height: 2.75rem;
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

const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const ImgButton = styled(Button)`
  width: 6rem;
  height: 2.75rem;
`;

const ProfileImage = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  overflow: hidden;
  padding: 10px;
  border: 2px solid ${pallete.scheme.blue};
`;

const WraningWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const CompanyFormComponent: React.FC = () => {
  const { register, handleSubmit } = useForm<InputListType>();
  const [address, setAddress] = useState<string>('');
  const [isPostCode, setIsPostCode] = useState<boolean>(false);
  const [companyImgUrl, setCompanyImgUrl] = useState<string>('');
  const [preview, setPreview] = useState<boolean>(false);

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormHeader>회사 등록</FormHeader>
        <Input
          placeholder="회사명"
          {...register('company')}
          type="text"
          maxLength={100}
        />
        <AddressWrapper>
          <Input
            placeholder="회사 도로명 주소"
            {...register('companyLocation')}
            type="address"
            value={address}
            onChange={e => setAddress(e.target.value)}
          />
          <AddressButton type="button" onClick={() => setIsPostCode(true)}>
            주소 찾기
          </AddressButton>
        </AddressWrapper>
        {isPostCode && (
          <PostCode key="key1" set={setAddress} setVisible={setIsPostCode} />
        )}
        <Input
          placeholder="회사 홈페이지 uri"
          {...register('homepage')}
          type="uri"
          maxLength={100}
        />
        <ImgWrapper>
          <Input
            placeholder="회사 이미지 uri"
            {...register('companyImg')}
            type="uri"
            maxLength={100}
            onChange={e => setCompanyImgUrl(e.target.value)}
          />
          <ImgButton type="button" onClick={() => setPreview(!preview)}>
            {preview ? '닫기' : '미리보기'}
          </ImgButton>
        </ImgWrapper>
        {preview && (
          <ProfileImage>
            <img src={companyImgUrl} alt="회사 이미지" height="100%" />
          </ProfileImage>
        )}
        <WraningWrapper>
          <Warning />
        </WraningWrapper>
        <SubmitInput type="submit" value={'완료'} />
      </Form>
    </FormWrapper>
  );
};
