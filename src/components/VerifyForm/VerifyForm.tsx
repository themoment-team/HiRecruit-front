import { Dispatch, SetStateAction, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import axiosClient from 'libs/axios/axiosClient';
import { mentorUrl } from 'libs/api/apiUrlControllers';

import * as S from './VerifyForm.styles';
import toast from 'react-hot-toast';

interface VerifyFormProps {
  setVerifyFormVisible: Dispatch<SetStateAction<boolean>>;
}

interface InputListType {
  digit: string;
}

export const VerifyFormComponent: React.FC<VerifyFormProps> = ({
  setVerifyFormVisible,
}) => {
  const { register, handleSubmit } = useForm<InputListType>();
  const [isPosted, setIsPosted] = useState<boolean>(false);

  const onSubmit: SubmitHandler<InputListType> = async data => {
    axiosClient
      .patch(mentorUrl.patchVerify(data.digit))
      .then(function (response) {
        toast.success('인증이 완료되었어요');
        console.log(response);
      })
      .catch(function (error) {
        toast.error('인증에 실패하였어요');
        console.log(error);
      });
  };

  const onPostEmail = () => {
    axiosClient
      .post(mentorUrl.postPromotionEmailProcess())
      .then(function (response) {
        toast.success('인증번호가 발송되었어요');
        setIsPosted(true);
        console.log(response);
      })
      .catch(function (error) {
        toast.error('인증번호 발송중에 오류가 발생했어요');
        console.log(error);
      });
  };

  return (
    <S.VerifyFormWrapper>
      <S.VerifyForm onSubmit={handleSubmit(onSubmit)}>
        <S.VerifyFormHeader>멘토 등록</S.VerifyFormHeader>
        <S.EmailButtonWrapper>
          <S.Input {...register('digit')} placeholder="숫자 6자리 인증코드" />
          <S.EmailButton
            type="button"
            onClick={() => onPostEmail()}
            disabled={isPosted}
          >
            {isPosted ? '발송 완료' : '인증코드 발송'}
          </S.EmailButton>
        </S.EmailButtonWrapper>
        <S.ButtonWrapper>
          <S.CancelButton
            onClick={() => setVerifyFormVisible(false)}
            type="button"
          >
            취소
          </S.CancelButton>
          <S.Submit type="submit" value={'인증'} />
        </S.ButtonWrapper>
      </S.VerifyForm>
    </S.VerifyFormWrapper>
  );
};
