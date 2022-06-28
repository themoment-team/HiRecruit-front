import styled from '@emotion/styled';
import pallete from 'shared/Pallete';

interface BgProps {
  GUEST?: boolean;
}

export const SideBarButtonWrapper = styled.button<BgProps>`
  width: calc(100% - 3rem);
  height: 2.875rem;
  margin: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  background-color: ${props =>
    props.GUEST ? pallete.scheme.lightblue : pallete.scheme.lightgreen};
  color: ${props => (props.GUEST ? pallete.scheme.blue : pallete.scheme.green)};
  cursor: pointer;
  p {
    margin-left: 1rem;
  }
  .text-wrapper {
    display: flex;
    align-items: center;
  }
`;
