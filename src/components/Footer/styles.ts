import styled, { css } from 'styled-components';
import { MdCopyright } from 'react-icons/md';

const FlexRowSpaceBetween = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
`;

export const FooterMain = styled.div`
  ${FlexRowSpaceBetween}
  background: #222;
`;

export const FooterDown = styled.div`
  ${FlexRowSpaceBetween}
  position: relative;
  padding-top: 2rem;
  background: #334;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.colors.secondTextColor};
  }
`;

export const FooterRights = styled.div`
  ${FlexRowSpaceBetween}
  color: ${(props) => props.theme.colors.secondTextColor};
  margin-left: 1rem;

  & p {
    color: ${(props) => props.theme.colors.secondTextColor};
  }
  background: #353;
`;

export const FooterSocials = styled.div`
  margin-right: 1rem;
  background: #534;
`;

export const FooterMainBox = styled.div`
  background: #552;
`;

export const FooterContacts = styled.div`
  display: flex;
  flex-direction: column;
  background: #244;
`;

export const FooterNavigation = styled.div`
  background: #040;
`;

export const FooterAbout = styled.div`
  background: #300;
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