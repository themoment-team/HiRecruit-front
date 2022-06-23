import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

import { SearchInput } from 'components/SearchInput';
import { WorkerList } from 'components/WorkerList';
import { Modal } from 'components/common/Modal';
import { Menu } from 'components/Menu';
import { Form } from 'components/Form';
import { Burger } from 'assets/icons/Burger';
import { Cancel } from 'assets/icons/Cancel';
import { Logo } from 'assets/icons/Logo';

import * as S from './SideBar.styles';
import { handleAuth } from './container';
import { SideBarButton } from 'components/common/SideBarButton';
import { UserRule } from 'types/site.type';
import { EditForm } from 'components/EditForm';

interface SideBarProps {
  cookies: {
    [key: string]: string;
  };
}

export const SideBarComponent: React.FC<SideBarProps> = ({ cookies }) => {
  const [searchState, setSearchState] = useState<string>('');
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [editModalVisible, setEditModalVisible] = useState<boolean>(false);
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
    setModalVisible(true);
  };

  const handleMentorRegister = () => {
    toast('기능 준비중입니다.');
  };

  return (
    <>
      <S.SideBar>
        <S.SideBarHeader>
          <Logo logoColor="white" />
          {userRules === 'NO_AUTH_USER' ? (
            <S.SignUpAnchor onClick={() => handleAuth()}>
              회원가입/로그인
            </S.SignUpAnchor>
          ) : (
            <div
              onClick={() => {
                setMenuVisible(prev => !prev);
              }}
            >
              {menuVisible ? <Cancel /> : <Burger />}
            </div>
          )}
        </S.SideBarHeader>
        <S.SideBarWrapper>
          <SearchInput setSearchState={setSearchState} />
          {userRules === 'GUEST' && (
            <SideBarButton
              calloutText="내 프로필을 등록해볼까요?"
              trigger={handleProfileRegister}
            />
          )}
          {userRules === 'WORKER' && (
            <SideBarButton
              calloutText="멘토 등록하기"
              trigger={handleMentorRegister}
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
      {menuVisible && (
        <Menu
          setMenuVisible={setMenuVisible}
          setEditModalVisible={setEditModalVisible}
          userRules={userRules}
        />
      )}
      {editModalVisible && (
        <Modal setModalVisible={setEditModalVisible}>
          <EditForm setEditFormVisible={setEditModalVisible} />
        </Modal>
      )}
    </>
  );
};
