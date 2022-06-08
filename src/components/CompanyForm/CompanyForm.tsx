import { useState } from 'react';
import { css } from '@emotion/react';
import { useForm } from 'react-hook-form';

import { PostCode } from 'components/common/Postcode';
import { Warning } from 'assets/icons/Warning';

import * as S from './CompanyForm.styles';
import { onSubmit, InputListType } from './container';

export const CompanyFormComponent: React.FC = () => {
  const { register, handleSubmit } = useForm<InputListType>();

  const [address, setAddress] = useState<string>('');
  const [previewCompanyImgUri, setPreviewCompanyImgUri] = useState<string>('');

  const [postCodeVisible, setPostCodeVisible] = useState<boolean>(false);
  const [isPreview, setIsPreview] = useState<boolean>(false);
  const [isPicture, setIsPicture] = useState<boolean>(true);

  return (
    <S.FormModalBackground>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.FormHeader>회사 등록</S.FormHeader>
        <S.Input
          placeholder="회사명"
          {...register('companyName')}
          type="company-name"
        />
        <S.Input
          placeholder="회사 홈페이지 링크"
          {...register('homepageUri')}
          type="url"
        />
        <S.ButtonWrapper>
          <S.Input
            placeholder="회사 이미지 링크"
            {...register('companyImgUri')}
            type="url"
            onChange={e => {
              setPreviewCompanyImgUri(e.target.value);
              setIsPicture(true);
            }}
          />
          <S.Button type="button" onClick={() => setIsPreview(prev => !prev)}>
            {isPreview ? '그만보기' : '미리보기'}
          </S.Button>
        </S.ButtonWrapper>
        <S.SlideAnimation
          css={css`
            ${isPreview &&
            css`
              height: 10rem;
            `}
          `}
        >
          <S.ProfileImage>
            {isPicture ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={previewCompanyImgUri}
                alt="회사 이미지"
                height="100%"
                onError={() => {
                  setIsPicture(false);
                }}
              />
            ) : (
              <S.WarningText>
                <Warning />
                이미지가 적용되지 않나요?
              </S.WarningText>
            )}
          </S.ProfileImage>
        </S.SlideAnimation>
        <S.Input
          placeholder="회사 도로명 주소"
          {...register('companyLocation')}
          type="address"
          value={address}
          onClick={() => setPostCodeVisible(true)}
        />
        <S.SlideAnimation
          css={css`
            ${postCodeVisible &&
            css`
              height: 26rem;
            `}
          `}
        >
          {postCodeVisible && (
            <PostCode
              setAddress={setAddress}
              setPostCodeVisible={setPostCodeVisible}
            />
          )}
        </S.SlideAnimation>
        <S.Submit type="submit" value={'완료'} />
      </S.Form>
    </S.FormModalBackground>
  );
};
