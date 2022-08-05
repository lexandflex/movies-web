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
  padding: 16px;
  border: 2px solid ${(props) => props.theme.colors.accentColor};
  margin-right: 1rem;

  & p {
    color: ${(props) => props.theme.colors.secondTextColor};
  }

  & h1+p {
    color: ${(props) => props.theme.colors.altTextColor};
  }

  & p:nth-child(3) {
    padding: 2rem 0;
    position: relative;
    :after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      transform: translateX(50%);
      height: 1px;
      width: 50%;
      background-color: ${(props) => props.theme.colors.accentColor};
    }
  }

  & p:nth-child(4) {
    margin-top: 1rem;
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
