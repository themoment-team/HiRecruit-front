import { Dispatch, SetStateAction, useState } from 'react';
import { FieldErrors, SubmitHandler, useForm } from 'react-hook-form';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import toast from 'react-hot-toast';
import { css } from '@emotion/react';

import axiosClient from 'libs/axios/axiosClient';
import { mentorUrl } from 'libs/api/apiUrlControllers';
import pallete from 'shared/Pallete';
import { Warning } from 'assets/icons/Warning';

import * as S from './VerifyForm.styles';

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
  const [isPostable, setIsPostable] = useState<boolean>(true);
  const [postTryCount, setPostTryCount] = useState<number>(0);

  const resendEmailDuration = 10;

  const onSubmit: SubmitHandler<InputListType> = async data => {
    await axiosClient
      .patch(mentorUrl.patchVerify(data.digit))
      .then(function (response) {
        toast.success('인증이 완료되었어요');
        window.location.reload();
      })
      .catch(function (error) {
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

  const onError = (errors: FieldErrors<InputListType>) => {
    if (errors.digit?.message) {
      toast.error(errors.digit?.message);
    }
  };

  const onPostEmail = () => {
    if (isPostable) {
      setIsPostable(false);
      axiosClient
        .post(mentorUrl.postPromotionEmailProcess())
        .then(function (response) {
          setIsPostable(false);
          toast.success(
            postTryCount === 0
              ? '인증번호가 전송되었어요'
              : '인증번호가 재전송되었어요',
          );
          console.log(response);
        })
        .catch(function (error) {
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
    } else {
      toast.error('인증번호 재전송까지 시간이 남았어요');
    }
  };

  return (
    <S.VerifyFormWrapper>
      <S.VerifyForm onSubmit={handleSubmit(onSubmit, onError)}>
        <S.VerifyFormHeader>멘토 등록</S.VerifyFormHeader>
        <S.EmailButtonWrapper>
          <S.Input
            {...register('digit', {
              required: '인증번호를 입력하고 인증을 시도해주세요',
              pattern: {
                value: /^\d{6}$/,
                message:
                  '인증번호의 형식에 맞지 않아요\n숫자 6자리 인증번호를 입력해주세요',
              },
            })}
            autoComplete="off"
            placeholder="숫자 6자리 인증번호"
          />
          <S.EmailButton
            type="button"
            onClick={() => onPostEmail()}
            css={
              !isPostable &&
              css`
                background-color: ${pallete.scheme.darkgray};
              `
            }
          >
            {!isPostable && (
              <CountdownCircleTimer
                isPlaying
                duration={resendEmailDuration}
                colors={pallete.scheme.warning}
                trailColor={pallete.scheme.gray}
                strokeWidth={4}
                size={34}
                onComplete={() => {
                  setIsPostable(true);
                  setPostTryCount(prev => prev + 1);
                }}
              >
                {({ remainingTime }) => remainingTime}
              </CountdownCircleTimer>
            )}
            {isPostable &&
              (postTryCount === 0 ? '인증번호 전송' : '인증번호 재전송')}
          </S.EmailButton>
        </S.EmailButtonWrapper>
        <S.WarningText>
          <Warning />
          프로필 등록에 사용된 이메일로 인증번호를 발송합니다
        </S.WarningText>
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
