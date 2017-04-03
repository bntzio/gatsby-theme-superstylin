import React from 'react';
import { prefixLink } from 'gatsby-helpers';
import Helmet from 'react-helmet';
import { config } from 'config';
import {
  Wrapper,
  Title,
  Subtitle,
  StyledLink,
  StyledAnchor,
  From
} from '../components/styled/';

export default class Index extends React.Component {
  render() {
    return (
      <Wrapper>
        <Helmet title={config.siteTitle} meta={[{ 'name': 'description', 'content': 'sample' }]} />
        <Title>Superstylin'</Title>
        <Subtitle>A Gatsby starter with styled-components 💅</Subtitle>
        <StyledLink to={prefixLink('/about/')} underline>What's this?</StyledLink>
        <StyledLink to={prefixLink('/components/')} underline>Components</StyledLink>
        <StyledLink to={prefixLink('/blog/')} underline>Blog</StyledLink>
        <StyledAnchor href="https://github.com/bntzio/gatsby-starter-superstylin" target="_blank">Github</StyledAnchor>
        <From>From <a href="https://twitter.com/bntzio" target="_blank">@bntzio</a> with &lt;3</From>
      </Wrapper>
    )
  }
}
