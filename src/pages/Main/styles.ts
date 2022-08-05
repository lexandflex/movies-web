import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const MovieCategoryContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & a {
    width: max-content;
    padding-left: 5%;
    padding-bottom: 1%;
    font-size: 2em;
    font-style: normal;
    font-weight: 700;
    text-decoration: none;
    color: ${(props) => props.theme.colors.secondTextColor};

    &:hover {
      text-decoration: underline;
    }
  }
`;
