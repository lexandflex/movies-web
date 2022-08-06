import styled, { css } from 'styled-components';
import { MdCopyright } from 'react-icons/md';

const FlexRowSpaceBetween = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const FooterWrapper = styled.footer`
  background-color: ${(props) => props.theme.colors.secondBackgroundColor};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 400px;
  color: ${(props) => props.theme.colors.textColor};
  padding: 20px;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    letter-spacing: 0;
    font-size: smaller;
    padding: 10px;
  }
`;

export const FooterMain = styled.div`
  ${FlexRowSpaceBetween}
`;

export const FooterDown = styled.div`
  ${FlexRowSpaceBetween}
  position: relative;
  padding-top: 2rem;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.colors.secondTextColor};
  }

  @media (max-width: 576px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const FooterRights = styled.div`
  ${FlexRowSpaceBetween}
  color: ${(props) => props.theme.colors.secondTextColor};
  margin-left: 1.5rem;

  & p {
    color: ${(props) => props.theme.colors.secondTextColor};
  }

  @media (max-width: 576px) {
    margin: 0.5rem 0;
  }
`;

export const FooterSocials = styled.div`
  margin-right: 1.5rem;
`;

export const FooterMainBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 10px;
  margin: 0 1rem;
`;

export const FooterContacts = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  margin-top: 2rem;

  & p {
    color: ${(props) => props.theme.colors.secondTextColor};
  }

  & p:nth-child(4) {
    margin-top: 1rem;
  }

  & p:nth-child(5) {
    margin-bottom: 1rem;
  }

  & p:last-of-type {
    text-transform: none;
  }
`;

export const FooterNavigation = styled.ul`
  text-transform: uppercase;
  list-style: none;

  & li {
    margin-top: 0.5rem;
    :hover a {
      color: ${(props) => props.theme.colors.accentColor};
    }
  }
  
  & a {
    text-decoration: none;
    transition: all 0.2s;
    color: ${(props) => props.theme.colors.secondTextColor};
  }

  & h2 {
    user-select: none;
    margin-bottom: 1.5rem;
  }
`;

export const CopyRightsIcon = styled(MdCopyright)`
  font-size: 20px;
  margin-right: 0.25rem;
`;

export const SocialsIconWrapper = styled.a`
  text-decoration: none;
  font-size: 32px;
  margin-left: 2rem;
  color: ${(props) => props.theme.colors.secondTextColor};
  transition: all 0.2s;

  &:hover {
    color: ${(props) => props.theme.colors.accentColor};
    svg {
      transition: all 0.2s;
      transform: scale(1.2);
    }
  }

  @media (max-width: 576px) {
    font-size: 20px;
    margin-left: 1rem;
  }
`;