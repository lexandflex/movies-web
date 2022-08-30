import { Size } from '@models/common';
import styled from 'styled-components';

type SwitchSizes = {
  [key in Size]: {
    labelWidth: string;
    labelHeight: string;
    switchSize: string;
    checkedMarginLeft: string;
    switchMargin: string;
  };
};
const sizes: SwitchSizes = {
  xs: {
    labelWidth: '36px',
    labelHeight: '22px',
    switchSize: '15px',
    checkedMarginLeft: '18px',
    switchMargin: '3px',
  },
  sm: {
    labelWidth: '42px',
    labelHeight: '26px',
    switchSize: '18px',
    checkedMarginLeft: '21px',
    switchMargin: '3px',
  },
  md: {
    labelWidth: '50px',
    labelHeight: '31px',
    switchSize: '22px',
    checkedMarginLeft: '25px',
    switchMargin: '4px',
  },
  lg: {
    labelWidth: '60px',
    labelHeight: '37px',
    switchSize: '26px',
    checkedMarginLeft: '30px',
    switchMargin: '5px',
  },
  xl: {
    labelWidth: '60px',
    labelHeight: '37px',
    switchSize: '26px',
    checkedMarginLeft: '30px',
    switchMargin: '5px',
  },
};

export const Wrapper = styled.div`
  position: relative;
`;
export const SwitchLabel = styled.label<{ switchSize: Size }>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => sizes[props.switchSize].labelWidth};
  height: ${(props) => sizes[props.switchSize].labelHeight};
  border-radius: 15px;
  background: ${(props) => props.theme.colors.secondTextColor};
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: ${(props) => sizes[props.switchSize].switchSize};
    height: ${(props) => sizes[props.switchSize].switchSize};
    margin: ${(props) => sizes[props.switchSize].switchMargin};
    background: ${(props) => props.theme.colors.textColor};
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.4s;
  }
`;
export const Switch = styled.input<{ switchSize: Size }>`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: ${(props) => sizes[props.switchSize].labelWidth};
  height: ${(props) => sizes[props.switchSize].labelHeight};
  &:checked + ${SwitchLabel} {
    background: ${(props) => props.theme.colors.accentColor};
    &::after {
      margin-left: ${(props) => sizes[props.switchSize].checkedMarginLeft};
    }
  }
`;
