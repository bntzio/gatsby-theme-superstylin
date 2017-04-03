import React from 'react';
import moment from 'moment';
import { Column, Row } from 'hedron';
import { PostTitle, PostBody, PostDate } from './styled/';

export default class Post extends React.Component {
  render() {
    const { route } = this.props;
    const { title, body, date } = route.page.data;

    return (
      <Row>
        <Column>
          <PostTitle>{title}</PostTitle>
          <PostDate>{`Published on ${moment(date).format('MMMM Do YYYY')}`}</PostDate>
        </Column>
        <Column>
          <PostBody>
            <div dangerouslySetInnerHTML={{ __html: body }} />
          </PostBody>
        </Column>
      </Row>
    );
  }
}
