import React from 'react';
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';
import Post from '../components/Post';
import Error from '../components/Error';
import { StyledLink, Page, Row, Column } from '../components/styled/';

class MarkdownWrapper extends React.Component {
  render() {
    const { route } = this.props;
    const post = route.page.data;
    const layout = post.layout;
    let template;
    let header;

    if (layout === 'post') {
      template = <Post {...this.props} />;
      header = (
        <Row>
          <Column>
            <StyledLink to={prefixLink('/blog/')}>back to articles</StyledLink>
          </Column>
        </Row>
      );
    } else if (layout === 'error') {
      template = <Error {...this.props} />;
    }

    return (
      <Page>
        <Helmet title={`${config.siteTitle} - ${post.title}`} />
        {header}
        {template}
      </Page>
    );
  }
}

export default MarkdownWrapper;
