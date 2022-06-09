import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';

import * as S from './Form.styles';
import useCompanyList from 'hooks/api/company/use-company-list';

import { positionOptionList, onSubmit, InputListType } from './container';
import { Modal } from 'components/common/Modal';
import { CompanyForm } from 'components/CompanyForm';

export const FormComponent: React.FC = () => {
  const { register, handleSubmit } = useForm<InputListType>();
  const [companyModalVisible, setCompanyModalVisible] =
    useState<boolean>(false);

  const router = useRouter();
  const companyData = useCompanyList();

  useEffect(() => {
    router.replace(router.pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          {companyData?.map((company, i) => (
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
            setCompanyModalVisible(true);
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
      {companyModalVisible && (
        <Modal setModalVisible={setCompanyModalVisible}>
          <CompanyForm />
        </Modal>
      )}
    </S.FormWrapper>
  );
};
