import styled from 'styled-components';

export const RatingBlock = styled.div`
  width: auto;
  max-width: 100%;
  min-height: 60px;
  background: ${(props) => props.theme.colors.secondBackgroundColor};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  padding: 0px 1px;

  margin-top: 5px;
`;

export const RatingItem = styled.div`
  height: 50px;
  max-width: 50px;
  width: 9vw;
  margin: 1px 1px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  &:hover {
    background-color: ${(props) => props.theme.colors.accentColor};
  }
`;
