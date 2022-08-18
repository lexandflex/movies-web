import { css } from 'styled-components';

export const DropDownMenuIconCss = css`
  padding-right: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  color: ${(props) => props.theme.colors.secondTextColor};

  @media (max-width: 576px) {
    width: 3rem;
    height: 3rem;
  }
`;