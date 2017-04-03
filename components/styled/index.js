import styled, { injectGlobal, css } from 'styled-components';
import { darken } from 'polished';
import { Link } from 'react-router';

/*
 * Global Styles
 */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Slabo+27px');

  body {
    font-family: 'Slabo 27px', serif;
    color: palevioletred;
    background: papayawhip;
    text-align: center;
  }

  a {
    color: palevioletred;

    &:hover, &:focus, &:visited {
      color: palevioletred;
    }
  }
`;

/*
 * Media Queries
 */
const media = {
  tablet: (...args) => css`
    @media (min-width: 420px) {
      ${ css(...args) }
    }
  `
}

/*
 * Wrapper
 */
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12.5%;
`;

/*
 * Title
 */
 export const Title = styled.h1`
   font-size: 30px;
   text-decoration: underline;
 `;

/*
 * Subtitle
 */
export const Subtitle = styled.h2`
  font-size: 20px;
  margin-top: 5px;
  margin-bottom: 20px;
`;

/*
 * StyledLink
 */
export const StyledLink = styled(Link)`
  color: palevioletred;
  font-size: 18px;
  text-decoration: ${props => props.underline ? 'underline' : 'none'};

  &:hover {
    text-decoration: underline;
  }
`;

/*
 * StyledAnchor
 */
 export const StyledAnchor = styled.a`
   color: palevioletred;
   font-size: 18px;
 `;

/*
 * Message
 */
export const Message = styled.h2`
  font-size: 27px;
  text-decoration: underline;
`;

/*
 * Button
 */
export const Button = styled.button`
  padding: ${props => props.large ? '16px 48px' : '8px 24px'};
  color: white;
  font-size: 16px;
  font-weight: 600;
  background-color: black;
  border: 0;
  cursor: pointer;
`;

/*
 * DefaultButton
 */
export const DefaultButton = styled(Button)`
  background-color: lightblue;
  &:hover {
    background: ${darken(0.1, '#add8e6')};
  }
`;

/*
 * PrimaryButton
 */
export const PrimaryButton = styled(Button)`
  background-color: lightseagreen;
  &:hover {
    background: ${darken(0.1, '#20b2aa')};
  }
`;

/*
 * Success
 */
export const SuccessButton = styled(Button)`
  background-color: lightgreen;
  &:hover {
    background: ${darken(0.1, '#90ee90')};
  }
`;

/*
 * Warning
 */
export const WarningButton = styled(Button)`
  background-color: lightsalmon;
  &:hover {
    background: ${darken(0.1, '#ffa07a')};
  }
`;

/*
 * Danger
 */
export const DangerButton = styled(Button)`
  background-color: lightcoral;
  &:hover {
    background: ${darken(0.1, '#f08080')};
  }
`;

/*
 * Input
 */
export const Input = styled.input`
  color: ${props => props.color};
  font-size: 16px;
  padding: ${props => props.large ? '16px 48px' : '8px 24px'};
  border: 2px solid ${props => props.color};
  background: transparent;
`;

/*
 * Text
 */
export const Text = styled.p`
  font-size: ${props => props.fontSize || '16px'};
  ${ media.tablet`
    font-size: 20px;
  ` }
`;
