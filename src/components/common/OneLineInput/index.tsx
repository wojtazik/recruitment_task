import React, {
  ChangeEventHandler,
  FocusEventHandler,
  MouseEventHandler,
} from 'react';
import styled, { css } from 'styled-components';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';
import { SvgIconProps } from '@mui/material/SvgIcon/SvgIcon';
import { CELL_SIZE, colors, fontSizes } from '../../../config/styles';

export type OneLineInputProps = {
  Icon?: OverridableComponent<SvgIconTypeMap> & { muiName: string };
  iconProps?: SvgIconProps;
  label?: string;
  placeholder?: string;
  name: string;
  value: string | number;
  labelPosition?: 'top' | 'bottom';
  onClick?: MouseEventHandler;
  onChange: ChangeEventHandler;
  onFocus?: FocusEventHandler;
  onBlur?: FocusEventHandler;
};

const OneLineInput: React.FC<OneLineInputProps> = ({
  Icon,
  label,
  iconProps,
  placeholder,
  labelPosition = 'top',
  name,
  value,
  onClick,
  onChange,
  onFocus,
  onBlur,
}) => (
  <SearchInputWrapper labelPosition={labelPosition}>
    {label && labelPosition === 'top' && (
      <SearchInputLabel htmlFor={name}>{label}</SearchInputLabel>
    )}
    <SearchInputFlexContainer label={label} labelPosition={labelPosition}>
      {Icon && (
        <IconWrapper>
          <Icon {...iconProps} />
        </IconWrapper>
      )}
      <SearchInputStyled
        name={name}
        value={value}
        placeholder={placeholder}
        onClick={onClick}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </SearchInputFlexContainer>
  </SearchInputWrapper>
);

type WithLabelProps = {
  labelPosition: 'top' | 'bottom';
  label?: string;
};

const SearchInputWrapper = styled.div<WithLabelProps>`
  display: flex;
  flex-direction: ${({ labelPosition }) =>
    labelPosition === 'top' ? 'column' : 'column-reverse'};
  align-items: start;
`;

const SearchInputLabel = styled.label`
  color: ${colors.BASE_GREY};
  font-weight: 700;
  margin-left: ${3 * CELL_SIZE}px;
  font-size: ${fontSizes.LABEL_SIZE};
`;

const IconWrapper = styled.div`
  position: absolute;
  left: ${3 * CELL_SIZE}px;
  top: 50%;
  transform: translateY(-50%);
  color: ${colors.LIGHT_GREY};
`;

const SearchInputFlexContainer = styled.div<WithLabelProps>`
  display: flex;
  width: 100%;
  position: relative;
  ${({ labelPosition, label }) => {
    if (label) {
      if (labelPosition === 'top') {
        return css`
          margin-top: ${2 * CELL_SIZE}px;
        `;
      }
      if (labelPosition === 'bottom') {
        return css`
          margin-bottom: ${2 * CELL_SIZE}px;
        `;
      }
    }

    return null;
  }}
`;

const SearchInputStyled = styled.input`
  width: 100%;
  height: ${6 * CELL_SIZE}px;
  border-radius: ${8 * CELL_SIZE}px;
  outline: none;
  padding: ${2 * CELL_SIZE}px ${2 * CELL_SIZE}px ${2 * CELL_SIZE}px
    ${8 * CELL_SIZE}px;
  color: ${colors.BASE_GREY};
  font-weight: 700;
  font-size: ${fontSizes.LABEL_SIZE};

  &::placeholder {
    color: ${colors.LIGHT_GREY};
    font-size: ${fontSizes.LABEL_SIZE};
    font-weight: 400;
  }
`;

export default OneLineInput;
