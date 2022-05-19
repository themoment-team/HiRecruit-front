import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import pallete from 'shared/Pallete';

const SearchInput = styled.input`
  width: 100%;
  height: 2.75rem;
  margin: 1.75rem 0;
  border: none;
  font-size: 0.925rem;
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

export const SearchInputComponent: React.FC<Props> = ({ setSearchState }) => {
  const router = useRouter();
  const inputEl = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // query string clean up
    if (router.query.search === '') {
      router.replace(`/`);
    }
    if (router.query.search !== undefined && inputEl.current !== null) {
      inputEl.current.focus();
      inputEl.current.value = router.query.search as string;

      setSearchState(router.query.search as string);
    }
  }, [router.query.search]);

  return (
    <SearchInput
      ref={inputEl}
      type="text"
      placeholder="이름 또는 회사로 검색"
      onChange={e => {
        router.replace({
          pathname: `/`,
          query: { search: e.target.value },
        });
      }}
    />
  );
};
