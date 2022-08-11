import styled from 'styled-components';
import { MdExpandMore } from 'react-icons/md';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & div {
    margin-bottom: 1rem;
  }
`;

export const ShowMoreIcon = styled(MdExpandMore)`
  font-size: 3rem;
  position: absolute;
  bottom: 0;
`;
