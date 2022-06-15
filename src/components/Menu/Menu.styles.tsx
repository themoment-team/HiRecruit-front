import styled from '@emotion/styled';

import { flipX } from 'shared/Animation.style';
import pallete from 'shared/Pallete';

export const MenuWrapper = styled.ul`
  padding: 0.5rem;
  position: absolute;
  top: 4.65rem;
  right: 1rem;
  border-radius: 1rem;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${pallete.scheme.white};
  box-shadow: 0px 12px 20px 6px ${pallete.scheme.black + '08'};
  animation: ${flipX} 0.4s ease-in-out;
`;

export const MenuListItem = styled.li`
  width: 8rem;
  padding: 1.25rem;
  color: ${pallete.scheme.paragraph};
  border-radius: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color: ${pallete.scheme.gray};
    transition: background-color 0.2s;
  }
`;

export const MenuListItemRed = styled(MenuListItem)`
  color: ${pallete.scheme.red};
  &:hover {
    background-color: ${pallete.scheme.red + '11'};
    transition: background-color 0.2s;
  }
`;
