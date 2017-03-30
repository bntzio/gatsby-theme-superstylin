import { injectGlobal } from 'styled-components';
import styled from 'styled-components';
import { Link } from 'react-router';

/*
 * Global Styles
 */
injectGlobal`
  body {
    color: palevioletred;
    background: papayawhip;
  }
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
`;

/*
 * StyledAnchor
 */
 export const StyledAnchor = styled.a`
   color: palevioletred;
   font-size: 18px;
 `;
