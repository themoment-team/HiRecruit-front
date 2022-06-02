import styled from '@emotion/styled';

import pallete from 'shared/Pallete';

interface OptionType {
  value: string;
  label: string;
}

interface SelectProps {
  optionList: OptionType[];
}

const Select = styled.select`
  width: 100%;
  height: 2.75rem;
  font-size: 0.925rem;
  font-weight: 500;
  color: ${pallete.scheme.paragraph};
  caret-color: ${pallete.scheme.paragraph};
  padding: 0.25rem 0.5rem;
  margin: 1rem 0;
  border-radius: 0.625rem;
  border: 2px solid ${pallete.scheme.blue};
  outline: none;
`;

export const SelectComponent: React.FC<SelectProps> = ({ optionList }) => {
  return (
    <Select>
      {optionList.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </Select>
  );
};
