import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

import { Input as SearchInput } from 'components/common/Input';
import { css } from '@emotion/react';
import pallete from 'shared/Pallete';
import { Magnifier } from 'assets/icons/Magnifier';

interface SearchInputProps {
  setSearchState: React.Dispatch<React.SetStateAction<string>>;
}

const SvgCss = css`
  position: absolute;
  top: 2.125rem;
  right: 1.5rem;
  cursor: pointer;
`;

const InputCss = css`
  height: 3.75rem;
  width: 22rem;
  margin-top: 1rem;
  padding-left: 1.5rem;
  box-sizing: border-box;
  border: 2px solid ${pallete.scheme.blue};
  margin: 1rem 1.5rem;
  border-radius: 0.5rem;
  outline: none;
  font-size: 1rem;
  font-weight: 400;
  line-height: 19px;
`;

export const SearchInputComponent: React.FC<SearchInputProps> = ({
  setSearchState,
}) => {
  const router = useRouter();
  const inputEl = useRef<HTMLInputElement>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchState(e.target.value);
  };

  const handleQueryString = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      router.replace({
        pathname: '/',
      });
    } else {
      router.replace({
        pathname: `/`,
        query: { search: e.target.value },
      });
    }
  };

  useEffect(() => {
    if (router.query.search === '') {
      router.replace('/');
    }
    if (router.query.search && inputEl.current) {
      inputEl.current.focus();
      inputEl.current.value = router.query.search as string;

      setSearchState(router.query.search as string);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.search]);

  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <SearchInput
        css={InputCss}
        ref={inputEl}
        type="text"
        placeholder="이름 또는 회사로 검색"
        onChange={handleSearch}
        onBlur={handleQueryString}
      />
      <Magnifier css={SvgCss} />
    </div>
  );
};
