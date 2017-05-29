import styled, { injectGlobal, css } from 'styled-components';
import { darken, lighten } from 'polished';
import { Link } from 'react-router';
import { compute, ifDefined } from '../../utils/hedron';
import {
  Page as HedronPage,
  Row as HedronRow,
  Column as HedronColumn
} from 'hedron';

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
 * Grid
 */
export const Page = styled(HedronPage)`
  ${props =>
    props.fluid
      ? 'width: 100%;'
      : `
    margin: 0 auto;
    max-width: 100%;
    ${props.width
      ? `width: ${props.width};`
      : 'width: 960px;'
    }
    `
  }
`;

export const Row = styled(HedronRow)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  ${ifDefined('alignContent', 'align-content')}
  ${ifDefined('alignItems', 'align-items')}
  ${ifDefined('alignSelf', 'align-self')}
  ${ifDefined('justifyContent', 'justify-content')}
  ${ifDefined('order')}
`;

export const Column = styled(HedronColumn)`
  display: block;
  ${props => props.debug
    ? `background-color: rgba(50, 50, 255, .1);
  outline: 1px solid #fff;`
    : ''
  }
  box-sizing: border-box;
  padding: ${props => props.fluid ? '0' : '20px'};
  width: 100%;
  ${compute('xs')}
  ${compute('sm')}
  ${compute('md')}
  ${compute('lg')}
`;


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

/*
 * PostLinkContainer
 */
export const PostLinkContainer = styled(Row)`
  border-bottom: 2px solid ${lighten(0.1, '#db7093')};
`;

/*
 * PostLinkTitle
 */
export const PostLinkTitle = styled.h2`
  font-size: 18px;
  font-weight: 900;
`;

/*
 * PostLinkDescription
 */
export const PostLinkDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
`;

/*
 * PostTitle
 */
export const PostTitle = styled.h1`
  font-size: 30px;
  text-decoration: underline;
  margin-bottom: 7px;
`;

/*
 * PostBody
 */
export const PostBody = styled.div`
 padding: 0px 50px;
 font-size: 17px;
 ${ media.tablet`
   font-size: 20px;
 ` }
`;

/*
 * PostDate
 */
export const PostDate = styled.span`
  font-size: 13px;
  font-weight: lighter;
`;

/*
 * From
 */
export const From = styled.div`
  position: fixed;
  bottom: 8px;
  right: 8px;
  font-size: 13px;

  a {
    text-decoration: none;
    font-weight: bolder;
  }
`;

/*
 * ErrorTitle
 */
export const ErrorTitle = styled.h4`
  font-size: 34px;
  margin-bottom: 0;
`;

/*
 * ErrorBody
 */
export const ErrorBody = styled.div`
  font-size: 18px;

  a {
    display: block;
    margin-top: 50px;
  }
`;
