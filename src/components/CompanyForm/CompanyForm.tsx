import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { css } from '@emotion/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useSWRConfig } from 'swr';

import { PostCode } from 'components/common/Postcode';
import { Warning } from 'assets/icons/Warning';
import { CompanyReqData } from 'types/company.type';
import axiosClient from 'libs/axios/axiosClient';
import { companyUrl } from 'libs/api/apiUrlControllers';

import * as S from './CompanyForm.styles';
import { InputListType } from './container';

interface CompanyFormProps {
  setCompanyFormModalVisible: Dispatch<SetStateAction<boolean>>;
}

export const CompanyFormComponent: React.FC<CompanyFormProps> = ({
  setCompanyFormModalVisible,
}) => {
  const uriRegex =
    // eslint-disable-next-line no-useless-escape
    /(http(s)?:\/\/|www.)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}([\/a-z0-9-%#?&=\w])+(\.[a-z0-9]{2,4}(\?[\/a-z0-9-%#?&=\w]+)*)*/gi;

  const { register, handleSubmit, setValue } = useForm<InputListType>();
  const { mutate } = useSWRConfig();

  const [address, setAddress] = useState<string>('');
  const [previewCompanyImgUri, setPreviewCompanyImgUri] = useState<string>('');

  const [postCodeVisible, setPostCodeVisible] = useState<boolean>(false);
  const [isPreview, setIsPreview] = useState<boolean>(false);
  const [isPicture, setIsPicture] = useState<boolean>(true);

  useEffect(() => {
    setValue('companyLocation', address);
  }, [address]);

  const onSubmit: SubmitHandler<InputListType> = data => {
    if (!uriRegex.test(data.companyImgUri)) {
      toast.error('지원하지 않는 이미지 주소 형식이에요');
      return;
    }

    // TODO: post 로직 고도화
    const reqData: CompanyReqData = {
      name: data.companyName,
      location: data.companyLocation,
      homepageUri: data.homepageUri,
      companyImgUri: data.companyImgUri,
    };

    axiosClient
      .post(companyUrl.getAllCompany(), reqData)
      .then(function (response) {
        toast.success('회사 등록이 완료되었어요');
        setCompanyFormModalVisible(false);
        mutate(companyUrl.getAllCompany());
      })
      .catch(function (error) {
        console.log(error);
        toast.error('회사 등록에 실패했어요');
      });
  };

  return (
    <S.FormModalBackground>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.FormHeader>회사 등록</S.FormHeader>
        <S.Input
          {...register('companyName')}
          required
          placeholder="회사명"
          maxLength={65}
        />
        <S.Input
          {...register('homepageUri')}
          required
          placeholder="회사 홈페이지 링크"
          type="url"
        />
        <S.ButtonWrapper>
          <S.Input
            {...register('companyImgUri')}
            required
            placeholder="회사 이미지 url"
            type="url"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
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
                draggable="false"
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
          onClick={() => setPostCodeVisible(true)}
          {...register('companyLocation')}
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
