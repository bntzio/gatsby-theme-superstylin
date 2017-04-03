import React from 'react';
import { Column, Row } from 'hedron';
import { PostLinkTitle, PostLinkDescription, StyledLink } from './styled/';

export default class PostLink extends React.Component {
  render() {
    const { title, description, path } = this.props.postData;

    return (
      <Row>
        <Column>
          <PostLinkTitle>
            <StyledLink to={path}>{title}</StyledLink>
          </PostLinkTitle>
          <PostLinkDescription>{description}</PostLinkDescription>
        </Column>
      </Row>
    );
  }
}
