import styled from '@emotion/styled';
import pallete from 'shared/Pallete';

export const LauncherWrapper = styled.div`
  position: absolute;
  border-radius: 2rem;
  bottom: 1.5rem;
  right: 30.5rem;
  z-index: 100;
  display: flex;
  background: ${pallete.scheme.white};
  box-shadow: 0px 12px 20px 6px ${pallete.scheme.black + '08'};
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    button {
      transition: transform 0.2s ease-in-out;
      transform: rotate(45deg);
    }
  }
`;

export const LauncherButton = styled.button`
  width: 3.4rem;
  height: 3.4rem;
  border-radius: 2rem;
  border: none;
  background: ${pallete.scheme.blue};
  box-shadow: 0px 12px 20px 6px ${pallete.scheme.black + '08'};
  cursor: pointer;
  font-weight: 600;
  font-size: 1.2rem;
  color: ${pallete.scheme.white};
`;

export const LauncherText = styled.p`
  color: ${pallete.scheme.paragraph};
  margin: 0 1.2rem;
  margin-right: 1rem;
  font-weight: 500;
`;
