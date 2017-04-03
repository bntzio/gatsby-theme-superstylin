import React from 'react';
import { Column } from 'hedron';
import {
  PostLinkContainer,
  PostLinkTitle,
  PostLinkDescription,
  StyledLink
} from './styled/';

export default class PostLink extends React.Component {
  render() {
    const { title, description, path } = this.props.postData;

    return (
      <PostLinkContainer>
        <Column>
          <PostLinkTitle>
            <StyledLink to={path}>{title}</StyledLink>
          </PostLinkTitle>
          <PostLinkDescription>{description}</PostLinkDescription>
        </Column>
      </PostLinkContainer>
    );
  }
}
