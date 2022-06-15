import * as S from './Launcher.styles';

export const LauncherComponent: React.FC = () => {
  return (
    <a target="_blank" href="https://about.hirecruit.site/" rel="noreferrer">
      <S.LauncherWrapper>
        <S.LauncherText>프로젝트에 관하여</S.LauncherText>
        <S.LauncherButton>?</S.LauncherButton>
      </S.LauncherWrapper>
    </a>
  );
};
