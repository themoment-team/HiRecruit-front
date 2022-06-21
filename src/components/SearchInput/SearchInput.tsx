import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

import { Input as SearchInput } from 'components/common/Input';
import { css } from '@emotion/react';

interface SearchInputProps {
  setSearchState: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchInputComponent: React.FC<SearchInputProps> = ({
  setSearchState,
}) => {
  const router = useRouter();
  const inputEl = useRef<HTMLInputElement>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchState(e.target.value);
  };

  const handleQueryString = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value !== '') {
      router.replace({
        pathname: `/`,
        query: { search: e.target.value },
      });
    } else {
      router.replace({
        pathname: `/`,
      });
    }
  };

  useEffect(() => {
    if (router.query.search !== undefined && inputEl.current !== null) {
      inputEl.current.focus();
      inputEl.current.value = router.query.search as string;

      setSearchState(router.query.search as string);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.search]);

  return (
    <SearchInput
      css={css`
        margin: 1.75rem 0;
        margin-bottom: 0;
      `}
      ref={inputEl}
      type="text"
      placeholder="이름 또는 회사로 검색"
      onChange={handleSearch}
      onBlur={handleQueryString}
    />
  );
};
