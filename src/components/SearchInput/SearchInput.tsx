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
  right: 3rem;
  cursor: pointer;
`;

const InputCss = css`
  height: 3.75rem;
  width: 22rem;
  padding-left: 1.5rem;
  box-sizing: border-box;
  border: 2px solid ${pallete.scheme.blue};
  margin: 1rem 1.5rem;
  margin-bottom: 0;
  border-radius: 0.5rem;
  outline: none;
  font-size: 1rem;
  font-weight: 400;
  line-height: 19px;
  @media (max-width: 500px) {
    width: calc(100vw - 2.8rem);
    height: 3rem;
    position: fixed;
    top: 6.4625rem;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    margin: 0;
    padding-left: 1rem;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1rem;
    box-shadow: 0px 4px 10px 0px #00000040;
  }
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
        pathname: router.pathname,
      });
    } else {
      router.replace({
        pathname: router.pathname,
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
