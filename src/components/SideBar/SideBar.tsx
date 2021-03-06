import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

import { SearchInput } from 'components/SearchInput';
import { WorkerList } from 'components/WorkerList';
import { Modal } from 'components/common/Modal';
import { Menu } from 'components/Menu';
import { Form } from 'components/Form';
import { VerifyForm } from 'components/VerifyForm';
import { SideBarButton } from 'components/common/SideBarButton';
import { EditForm } from 'components/EditForm';
import axiosClient from 'libs/axios/axiosClient';
import { workerUrl } from 'libs/api/apiUrlControllers';
import { UserRule } from 'types/site.type';

import * as S from './SideBar.styles';
import { handleLogout } from './container';
import { Header } from 'components/common/Header';
import { AxiosError } from 'axios';

interface SideBarProps {
  cookies: {
    [key: string]: string;
  };
}

export const SideBarComponent: React.FC<SideBarProps> = ({ cookies }) => {
  const [searchState, setSearchState] = useState<string>('');
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [editModalVisible, setEditModalVisible] = useState<boolean>(false);
  const [verifyFormModalVisible, setVerifyFormModalVisible] =
    useState<boolean>(false);
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [userRules, setUserRules] = useState<UserRule>('NO_AUTH_USER');
  const router = useRouter();

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

  useEffect(() => {
    switch (router.query.login) {
      case 'fail':
        if (router.query.server_error === 'true') {
          toast.error(
            '서버에서 인증에 실패했어요\nhirecruit@gsm.hs.kr에 문의해주세요',
            { duration: Infinity },
          );
        } else {
          toast.error(
            '알수없는 이유로 인증에 실패했어요\nhirecruit@gsm.hs.kr에 문의해주세요',
            { duration: Infinity },
          );
        }
        break;
      case 'cancel':
        toast('인증을 취소했어요');
        break;
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
      <S.SideBar>
        <Header
          userRules={userRules}
          setMenuVisible={setMenuVisible}
          menuVisible={menuVisible}
        />
        <S.SideBarWrapper>
          <SearchInput setSearchState={setSearchState} />
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
        </S.SideBarWrapper>
      </S.SideBar>
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
      {menuVisible && (
        <Menu
          setMenuVisible={setMenuVisible}
          setEditModalVisible={setEditModalVisible}
          userRules={userRules}
        />
      )}
      {editModalVisible && (
        <Modal setModalVisible={setEditModalVisible}>
          <EditForm
            setEditFormVisible={setEditModalVisible}
            cookies={cookies}
          />
        </Modal>
      )}
    </>
  );
};
