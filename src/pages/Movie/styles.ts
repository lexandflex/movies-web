import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: 1200px) {
    flex-direction: column-reverse;
  }
`;

export const MainInfo = styled.div`
  flex: 1;
  padding: 10px;
  border: 1px solid ${(props) => props.theme.colors.accentColor};
  margin-right: 1rem;

  & p {
    padding-top: 0.5rem;
    color: ${(props) => props.theme.colors.secondTextColor};
  }

  @media (max-width: 1200px) {
    margin-top: 1rem;
    margin-right: 0;
  }
`;

export const Player = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
`;
