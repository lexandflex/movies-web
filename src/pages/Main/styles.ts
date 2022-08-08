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
  margin-bottom: 3rem;

  & a {
    width: max-content;
    padding-left: 5%;
    padding-bottom: 1%;
    font-size: clamp(18px, 2vw, 42px);
    font-style: normal;
    font-weight: 700;
    text-decoration: none;
    color: ${(props) => props.theme.colors.secondTextColor};

    &:hover {
      text-decoration: underline;
    }
  }
`;
