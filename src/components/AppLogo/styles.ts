import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LogoWrapper = styled.div`
  transition: all 0.3s;

  &:hover {
    transform: scale(0.9);
  }
`;

export const LogoWithText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
`;
