import styled from '@emotion/styled';
import pallete from 'shared/Pallete';

const SearchBar = styled.input`
  width: 100%;
  height: 2.5rem;
  margin: 1.75rem 0;
  border: none;
  font-size: 0.875rem;
  padding: 0.25rem 0.75rem;
  border-radius: 0.625rem;
  color: ${pallete.scheme.paragraph};
  caret-color: ${pallete.scheme.paragraph};
  font-weight: 500;
  &::placeholder {
    font-weight: initial;
    transition: opacity 0.18s;
  }
  &:focus {
    outline: 2px solid ${pallete.scheme.blue};
    &::placeholder {
      opacity: 0;
    }
  }
`;

interface Props {
  setSearchState: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchBarComponent: React.FC<Props> = ({ setSearchState }) => {
  return (
    <SearchBar
      placeholder="이름 또는 회사로 검색"
      onChange={e => {
        setSearchState(e.target.value);
      }}
    />
  );
};
