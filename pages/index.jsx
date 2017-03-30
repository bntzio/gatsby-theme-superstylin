import React from 'react';
import { prefixLink } from 'gatsby-helpers';
import Helmet from 'react-helmet';
import { config } from 'config';
import {
  Wrapper,
  Title,
  Subtitle,
  StyledLink,
  StyledAnchor
} from '../components/styled/';

export default class Index extends React.Component {
  render() {
    return (
      <Wrapper>
        <Helmet title={config.siteTitle} meta={[{ 'name': 'description', 'content': 'sample' }]} />
        <Title>Superstylin'</Title>
        <Subtitle>A Gatsby starter with styled-components</Subtitle>
        <StyledLink to={prefixLink('/components/')}>Components</StyledLink>
        <StyledLink to={prefixLink('/essays/')}>Essays</StyledLink>
        <StyledAnchor href="https://github.com/bntzio/gatsby-starter-superstylin">Github</StyledAnchor>
      </Wrapper>
    )
  }
}
