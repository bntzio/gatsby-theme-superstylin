import React from 'react';
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers';
import { Row, Column, Page } from 'hedron';
import { config } from 'config';
import _ from 'lodash';
import {
  Message,
  Subtitle,
  DefaultButton,
  PrimaryButton,
  SuccessButton,
  WarningButton,
  DangerButton,
  Input,
  StyledLink
} from '../components/styled/';

export default class Components extends React.Component {
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
            <Message>Example Components</Message>
          </Column>
        </Row>
        <Row>
          <Column>
            <Subtitle>Buttons</Subtitle>
            <DefaultButton>Default</DefaultButton>
            <PrimaryButton>Primary</PrimaryButton>
            <SuccessButton>Success</SuccessButton>
            <WarningButton>Warning</WarningButton>
            <DangerButton>Danger</DangerButton>
          </Column>
        </Row>
        <Row>
          <Column>
            <Subtitle>Inputs</Subtitle>
            <Input color="red" placeholder="Red" />
            <Input color="rebeccapurple" placeholder="Rebeccapurple" />
            <Input color="salmon" placeholder="Salmon" />
            <Input color="goldenrod" placeholder="Goldenrod" />
          </Column>
        </Row>
        <Row>
          <Column>
            <Subtitle>Variants</Subtitle>
            <PrimaryButton large>Primary</PrimaryButton>
            <SuccessButton large>Success</SuccessButton>
            <DangerButton large>Danger</DangerButton>
          </Column>
        </Row>
        <Row>
          <Column>
            <Input large color="rebeccapurple" placeholder="Rebeccapurple" />
            <Input large color="goldenrod" placeholder="Goldenrod" />
          </Column>
        </Row>
      </Page>
    );
  }
}
