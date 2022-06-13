import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSWRConfig } from 'swr';
import toast from 'react-hot-toast';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';

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
  const router = useRouter();
  const { data } = useCompanyList();

  useEffect(() => {
    router.replace(router.pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        setSignUpFormVisible(false);
      })
      .catch(function (error) {
        toast.error(error);
      });
  };

  return (
    <S.FormWrapper>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.FormHeader>회원가입</S.FormHeader>
        <S.Input
          {...(register('name'),
          {
            placeholder: '이름',
            type: 'name',
            required: true,
          })}
        />
        <S.Input
          {...(register('email'),
          {
            placeholder: '이메일',
            type: 'email',
            required: true,
          })}
        />
        <S.SelectInput
          {...(register('companyId'),
          {
            required: true,
          })}
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
          {...(register('position'),
          {
            required: true,
          })}
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
          {...(register('devYear'),
          {
            placeholder: '연차',
            type: 'number',
            min: 0,
            max: 50,
            validate: {
              positive: (v: string) =>
                parseInt(v) > 0 || '연차값은 0 이상이어야해요',
            },
            required: true,
          })}
        />
        <S.Input
          {...(register('introduction'),
          {
            placeholder: '연차 소개',
            maxLength: 100,
            required: true,
          })}
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
