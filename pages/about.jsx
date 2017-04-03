import React from 'react';
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers';
import { Row, Column, Page } from 'hedron';
import { config } from 'config';
import _ from 'lodash';
import {
  Message,
  StyledLink,
  Text
} from '../components/styled/';

export default class About extends React.Component {
  render() {
    const { route } = this.props;
    const post = route.page.file;

    return (
      <Page>
        <Helmet title={`${config.siteTitle} - ${_.capitalize(post.name)}`} />
        <Row divisions={1}>
          <Column sm={1}>
            <StyledLink to={prefixLink('/')}>back home</StyledLink>
          </Column>
          <Column sm={1}>
            <Message>About Superstylin'</Message>
          </Column>
        </Row>
        <Row>
          <Column>
            <Text fontSize="18px">
              Superstylin' is a Gatsby starter focused on <b><a href="https://github.com/styled-components/styled-components" target="_blank">styled-components</a></b>.
            </Text>
            <Text fontSize="18px">
              By using <b>styled-components</b>, it means you write your <b>CSS in your JS</b>.
            </Text>
            <Text fontSize="18px">
              Just create a component and give it some styles and you're good to go, <b><a href="https://github.com/bntzio/gatsby-starter-superstylin#readme" target="_blank">read the readme for more</a></b>.
            </Text>
          </Column>
        </Row>
      </Page>
    );
  }
}
