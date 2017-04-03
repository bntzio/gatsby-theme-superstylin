import React from 'react';
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers';
import { Page, Row, Column } from 'hedron';
import { config } from 'config';
import Post from '../components/Post';
import { StyledLink } from '../components/styled/';

class MarkdownWrapper extends React.Component {
  render() {
    const { route } = this.props;
    const post = route.page.data;
    const layout = post.layout;
    let template;

    if (layout === 'post') {
      template = <Post {...this.props} />;
    }

    return (
     <Page>
       <Helmet title={`${config.siteTitle} - ${post.title}`} />
       <Row>
         <Column>
           <StyledLink to={prefixLink('/blog/')}>back to articles</StyledLink>
         </Column>
       </Row>
       {template}
     </Page>
   );
  }
}

export default MarkdownWrapper;
