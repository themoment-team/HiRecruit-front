import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';

import { Modal } from 'components/common/Modal';
import { CompanyForm } from 'components/CompanyForm';
import { WorkerReqData } from 'types/worker.type';
import axiosClient from 'libs/axios/axiosClient';

import * as S from './Form.styles';
import {
  positionOptionList,
  InputListType,
  KeyListType,
  keyList,
} from './container';
import useCompanyList from 'hooks/api/company/use-company-list';

interface SignUpFormProps {
  setSignUpFormVisible: Dispatch<SetStateAction<boolean>>;
}

export const FormComponent: React.FC<SignUpFormProps> = ({
  setSignUpFormVisible,
}) => {
  const { register, handleSubmit } = useForm<InputListType>();
  const [companyFormModalVisible, setCompanyFormModalVisible] =
    useState<boolean>(false);
  const router = useRouter();
  const { data } = useCompanyList();

  useEffect(() => {
    router.replace(router.pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit: SubmitHandler<InputListType> = async data => {
    const entries = Object.entries(data);

    const allNotFilled = entries.some(([key, value]) => {
      if (!value) {
        toast.error(
          `${keyList[key as keyof KeyListType]}은(는) 필수로 입력해야 해요`,
        );
        return true;
      }
    });

    if (!allNotFilled) {
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
          setSignUpFormVisible(false);
        })
        .catch(function (error) {
          toast.error(error);
        });
    }
  };

  return (
    <S.FormWrapper>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.FormHeader>회원가입</S.FormHeader>
        <S.Input placeholder="이름" {...register('name')} type="name" />
        <S.Input placeholder="이메일" {...register('email')} type="email" />
        <S.SelectInput
          {...register('companyId')}
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
          회사 등록하기
        </S.CompanyRegister>
        <S.SelectInput
          {...register('position')}
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
          placeholder="연차"
          {...register('devYear')}
          type="number"
          min={0}
        />
        <S.Input
          placeholder="한줄 소개"
          {...register('introduction')}
          type="text"
        />
        <S.Submit type="submit" value={'완료'} />
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
