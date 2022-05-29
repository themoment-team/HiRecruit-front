import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

import { Input as SearchInput } from 'components/common/Input';

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
