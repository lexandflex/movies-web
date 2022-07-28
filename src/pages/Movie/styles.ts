import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

export const MainInfo = styled.div`
  flex: 1;
  padding: 10px;
  border: 1px solid ${(props) => props.theme.colors.accentColor};
`;

export const Player = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
`;
