import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import _ from 'lodash';

export default class Essays extends React.Component {
  render() {
    const { route } = this.props;
    const post = route.page.file;

    return (
      <div>
        <Helmet title={`${config.siteTitle} - ${_.capitalize(post.name)}`} />
        <h3>Look! Essays!</h3>
      </div>
    );
  }
}
