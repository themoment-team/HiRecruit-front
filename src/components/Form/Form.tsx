import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSWRConfig } from 'swr';
import toast from 'react-hot-toast';
import { css } from '@emotion/react';

import { Modal } from 'components/common/Modal';
import { CompanyForm } from 'components/CompanyForm';
import { WorkerReqData } from 'types/worker.type';
import axiosClient from 'libs/axios/axiosClient';
import { workerUrl } from 'libs/api/apiUrlControllers';
import useCompanyList from 'hooks/api/company/use-company-list';

import * as S from './Form.styles';
import { positionOptionList, InputListType } from './container';

interface SignUpFormProps {
  setSignUpFormVisible: Dispatch<SetStateAction<boolean>>;
}

export const FormComponent: React.FC<SignUpFormProps> = ({
  setSignUpFormVisible,
}) => {
  const { register, handleSubmit } = useForm<InputListType>();
  const [companyFormModalVisible, setCompanyFormModalVisible] =
    useState<boolean>(false);
  const { mutate } = useSWRConfig();
  const { data } = useCompanyList();

  const onSubmit: SubmitHandler<InputListType> = async data => {
    // TODO: post 로직 고도화
    const reqData: WorkerReqData = {
      email: data.email,
      name: data.name,
      worker: {
        companyId: parseInt(data.companyId),
        devYear: parseInt(data.devYear),
        introduction: data.introduction,
        position: data.position,
      },
    };

    axiosClient
      .post('/auth/registration', reqData)
      .then(function (response) {
        toast.success('회원가입이 완료되었어요');
        mutate(workerUrl.getAllWorker());
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
        toast.error('회원가입에 실패했어요');
      });
  };

  return (
    <S.FormWrapper>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.FormHeader>프로필 등록하기</S.FormHeader>
        <S.Input {...register('name')} placeholder="이름" required />
        <S.Input
          {...register('email')}
          type="email"
          placeholder="이메일"
          required
        />
        <S.SelectInput
          {...register('companyId')}
          required
          css={css`
            margin-bottom: 0.4rem;
          `}
        >
          {data?.map((company, i) => (
            <>
              {i === 0 && (
                // option의 첫번째 값은 기본값으로 빈값을 반환
                <option key={'회사명'} value={''}>
                  회사명
                </option>
              )}
              <option key={company.name} value={company.companyId}>
                {company.name}
              </option>
            </>
          ))}
        </S.SelectInput>
        <S.CompanyRegister
          onClick={() => {
            setCompanyFormModalVisible(true);
          }}
        >
          <span>회사를 찾을 수 없나요?</span> 회사를 등록해주세요
        </S.CompanyRegister>
        <S.SelectInput
          {...register('position')}
          required
          css={css`
            margin-top: 0.6rem;
          `}
        >
          {positionOptionList.map((opt, i) => (
            // option의 첫번째 값은 기본값으로 빈값을 반환
            <option key={opt} value={i !== 0 ? opt : ''}>
              {opt}
            </option>
          ))}
        </S.SelectInput>
        <S.Input
          {...register('devYear')}
          placeholder="연차"
          required
          type="number"
          min={0}
          max={50}
        />
        <S.Input
          {...register('introduction')}
          placeholder="한줄 소개"
          required
          maxLength={100}
        />
        <S.ButtonWrapper>
          <S.CancelButton
            onClick={() => setSignUpFormVisible(false)}
            type="button"
          >
            취소
          </S.CancelButton>
          <S.Submit type="submit" value={'완료'} />
        </S.ButtonWrapper>
      </S.Form>
      {companyFormModalVisible && (
        <Modal setModalVisible={setCompanyFormModalVisible}>
          <CompanyForm
            setCompanyFormModalVisible={setCompanyFormModalVisible}
          />
        </Modal>
      )}
    </S.FormWrapper>
  );
};
