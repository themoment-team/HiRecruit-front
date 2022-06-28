import styled from '@emotion/styled';
import pallete from 'shared/Pallete';

interface BgProps {
  GUEST?: boolean;
}

export const SideBarButtonWrapper = styled.button<BgProps>`
  width: 100%;
  height: 2.875rem;
  padding: 0 0.5rem 0 1rem;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  position: relative;
  background-color: ${props =>
    props.GUEST ? pallete.scheme.lightblue : pallete.scheme.lightgreen};
  color: ${props => (props.GUEST ? pallete.scheme.blue : pallete.scheme.green)};
  cursor: pointer;
  p {
    margin-left: 1rem;
  }
  span {
    position: absolute;
    right: 0.5rem;
  }
`;
