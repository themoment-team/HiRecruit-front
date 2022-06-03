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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.search]);

  return (
    <SearchInput
      css={css`
        margin: 1.75rem 0;
      `}
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
