import { AxiosError } from 'axios';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { css } from '@emotion/react';

import { Modal } from 'components/common/Modal';
import { CompanyForm } from 'components/CompanyForm';
import { UserEditReqData, WorkerEditReqData } from 'types/worker.type';
import axiosClient from 'libs/axios/axiosClient';
import useCompanyList from 'hooks/api/company/use-company-list';

import * as S from './EditForm.styles';
import { handleLogout, InputListType, positionOptionList } from './container';
import { userUrl, workerUrl } from 'libs/api/apiUrlControllers';
import useWorker from 'hooks/api/worker/use-worker';
import { Warning } from 'assets/icons/Warning';
import { UserRule } from 'types/site.type';

interface EditFormProps {
  setEditFormVisible: Dispatch<SetStateAction<boolean>>;
  cookies: {
    [key: string]: string;
  };
}

export const EditFormComponent: React.FC<EditFormProps> = ({
  setEditFormVisible,
  cookies,
}) => {
  const { data: initialWorker } = useWorker();
  const { register, handleSubmit, setValue } = useForm<InputListType>();
  const [companyFormModalVisible, setCompanyFormModalVisible] =
    useState<boolean>(false);
  const [userRules, setUserRules] = useState<UserRule>('NO_AUTH_USER');
  const { data } = useCompanyList();

  useEffect(() => {
    if (initialWorker) {
      setValue('name', initialWorker.name);
      setValue('email', initialWorker.email);
      setValue('companyId', initialWorker.company.companyId.toString());
      setValue('devYear', initialWorker.devYear.toString());
      setValue('introduction', initialWorker.introduction);
      setValue('position', initialWorker.position);
    }
  }, [initialWorker]);

  useEffect(() => {
    const { USER_TYPE, HRSESSION } = cookies;

    if (USER_TYPE === 'GUEST' && HRSESSION) {
      setUserRules('GUEST');
    }

    if (USER_TYPE === 'WORKER' && HRSESSION) {
      setUserRules('WORKER');
    }

    if (USER_TYPE === 'MENTOR' && HRSESSION) {
      setUserRules('MENTOR');
    }
  }, []);

  const onSubmit: SubmitHandler<InputListType> = async data => {
    const userReqData: UserEditReqData = {
      name: data.name,
      email: data.email,
      updateColumns: ['EMAIL', 'NAME'],
    };
    const workerReqData: WorkerEditReqData = {
      companyId: parseInt(data.companyId),
      devYear: parseInt(data.devYear),
      introduction: data.introduction,
      position: data.position,
      updateColumns: [
        'COMPANY_ID',
        'INTRODUCTION',
        'DEV_YEAR',
        'GIVE_LINK',
        'POSITION',
      ],
    };

    axiosClient
      .patch(userUrl.getMeUser(), userReqData)
      .then(function () {
        window.location.reload();
      })
      .catch(function (error: AxiosError<{ message: string }>) {
        console.log(error);
      });

    axiosClient
      .patch(workerUrl.getMeWorker(), workerReqData)
      .then(function () {
        toast.success('정보가 수정되었어요.');
        window.location.reload();
      })
      .catch(function (error: AxiosError<{ message: string }>) {
        console.log(error);
        if (error.response) {
          switch (error.response.status) {
            case 400:
              toast.error(error.response.data.message);
              break;
            case 401:
              toast.error(
                '로그인 정보가 없어요\n새로고침 후 다시 한번 로그인 해주세요',
              );
              break;
            default:
              toast.error(
                '알 수 없는 이유로 등록에 실패했어요\nhirecruit@gsm.hs.kr에 문의해주세요',
              );
          }
        }
      });
  };

  const handleCompanyRegister = () => {
    axiosClient
      .get(workerUrl.getMeWorker())
      .then(function () {
        setCompanyFormModalVisible(true);
      })
      .catch(function (error: AxiosError) {
        if (error?.response?.status === 401) {
          toast.error(
            '로그인 정보가 일치하지 않아요\n자동으로 로그아웃 됩니다',
          );
          handleLogout();
        } else {
          setCompanyFormModalVisible(true);
        }
      });
  };

  return (
    <S.FormWrapper>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.FormHeader>프로필 수정하기</S.FormHeader>
        <S.Input {...register('name')} placeholder="이름" required />
        <div>
          <S.Input
            {...register('email')}
            type="email"
            placeholder="이메일"
            required
          />
          {userRules === 'MENTOR' && (
            <S.WarningText>
              <Warning />
              이메일을 변경하면 멘토 인증을 다시 하셔야 해요
            </S.WarningText>
          )}
        </div>
        <S.SelectInput
          {...register('companyId')}
          required
          css={css`
            margin-bottom: 0.4rem;
          `}
        >
          {data?.map(company => (
            <>
              <option key={company.name} value={company.companyId}>
                {company.name}
              </option>
            </>
          ))}
        </S.SelectInput>
        <S.CompanyRegister onClick={() => handleCompanyRegister()}>
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
            <>
              <option key={opt} value={i !== 0 ? opt : ''}>
                {opt}
              </option>
            </>
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
            onClick={() => setEditFormVisible(false)}
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
