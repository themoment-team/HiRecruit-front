import { SideBarButton } from 'components/common/SideBarButton';
import { WorkerList } from 'components/WorkerList';
import { useEffect, useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import { UserRule } from 'types/site.type';
import 'react-spring-bottom-sheet/dist/style.css';
import { workerUrl } from 'libs/api/apiUrlControllers';
import axiosClient from 'libs/axios/axiosClient';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { handleLogout } from './container';
import { Modal } from 'components/common/Modal';
import { Form } from 'components/Form';
import { VerifyForm } from 'components/VerifyForm';

interface BottomSheetProps {
  cookies: {
    [key: string]: string;
  };
}

export const BottomSheetComponent: React.FC<BottomSheetProps> = ({
  cookies,
}) => {
  const [open, setOpen] = useState(true);
  const [userRules, setUserRules] = useState<UserRule>('NO_AUTH_USER');
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [verifyFormModalVisible, setVerifyFormModalVisible] =
    useState<boolean>(false);
  const [searchState, setSearchState] = useState<string>('');

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

  const handleProfileRegister = () => {
    axiosClient
      .get(workerUrl.getMeWorker())
      .then(function () {
        setModalVisible(true);
      })
      .catch(function (error: AxiosError) {
        if (error?.response?.status === 401) {
          toast.error(
            '로그인 정보가 일치하지 않아요\n자동으로 로그아웃 됩니다',
          );
          handleLogout();
        } else {
          setModalVisible(true);
        }
      });
  };

  const handleMentorRegister = () => {
    axiosClient
      .get(workerUrl.getMeWorker())
      .then(function () {
        setVerifyFormModalVisible(true);
      })
      .catch(function (error: AxiosError) {
        if (error?.response?.status === 401) {
          toast.error(
            '로그인 정보가 일치하지 않아요\n자동으로 로그아웃 됩니다',
          );
          handleLogout();
        } else {
          setVerifyFormModalVisible(true);
        }
      });
  };

  return (
    <>
      <button onClick={() => setOpen(!open)}>{open ? 'CLOSE' : 'OPEN'}</button>
      <BottomSheet
        open={open}
        blocking={false}
        snapPoints={({ maxHeight }) => [0.27 * maxHeight, maxHeight * 0.735]}
      >
        {userRules === 'GUEST' && (
          <SideBarButton
            calloutText="내 프로필을 등록해볼까요?"
            trigger={handleProfileRegister}
            userRules="GUEST"
          />
        )}
        {userRules === 'WORKER' && (
          <SideBarButton
            calloutText="이제 멘토가 되어볼까요?"
            trigger={handleMentorRegister}
            userRules="WORKER"
          />
        )}
        <WorkerList searchState={searchState} userRules={userRules} />
      </BottomSheet>
      {modalVisible && (
        <Modal setModalVisible={setModalVisible}>
          <Form setSignUpFormVisible={setModalVisible} />
        </Modal>
      )}
      {verifyFormModalVisible && (
        <Modal setModalVisible={setVerifyFormModalVisible}>
          <VerifyForm setVerifyFormVisible={setVerifyFormModalVisible} />
        </Modal>
      )}
    </>
  );
};
