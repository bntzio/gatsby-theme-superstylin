import React from 'react';
import { Column, Row } from 'hedron';
import { prefixLink } from 'gatsby-helpers';
import { ErrorTitle, ErrorBody, StyledLink } from './styled/';

export default class Error extends React.Component {
  render() {
    const { route } = this.props;
    const { body } = route.page.data;

    return (
      <Row>
        <Column>
          <ErrorTitle>Yikes!</ErrorTitle>
        </Column>
        <Column>
          <ErrorBody>
            <div dangerouslySetInnerHTML={{ __html: body }} />
            <StyledLink to={prefixLink('/')}>back home</StyledLink>
          </ErrorBody>
        </Column>
      </Row>
    );
  }
}
