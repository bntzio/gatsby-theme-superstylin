import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import _ from 'lodash';
import {
  ComponentsWrapper,
  ComponentsWrapperInner,
  Message,
  Subtitle,
  DefaultButton,
  PrimaryButton,
  SuccessButton,
  WarningButton,
  DangerButton,
  Input
} from '../components/styled/';

export default class Components extends React.Component {
  render() {
    const { route } = this.props;
    const post = route.page.file;

    return (
      <ComponentsWrapper>
        <Helmet title={`${config.siteTitle} - ${_.capitalize(post.name)}`} />
        <Message>Meet some superstylin' components</Message>

        <Subtitle>Buttons</Subtitle>
        <ComponentsWrapperInner>
          <DefaultButton>Default</DefaultButton>
          <PrimaryButton>Primary</PrimaryButton>
          <SuccessButton>Success</SuccessButton>
          <WarningButton>Warning</WarningButton>
          <DangerButton>Danger</DangerButton>
        </ComponentsWrapperInner>

        <Subtitle>Inputs</Subtitle>
        <ComponentsWrapperInner>
          <Input color="red" placeholder="Red" />
          <Input color="rebeccapurple" placeholder="Rebeccapurple" />
          <Input color="salmon" placeholder="Salmon" />
          <Input color="goldenrod" placeholder="Goldenrod" />
        </ComponentsWrapperInner>

        <Subtitle>Variants</Subtitle>
        <ComponentsWrapperInner>
          <PrimaryButton large>Primary</PrimaryButton>
          <SuccessButton large>Success</SuccessButton>
          <DangerButton large>Danger</DangerButton>
        </ComponentsWrapperInner>
        <ComponentsWrapperInner>
          <Input large color="rebeccapurple" placeholder="Rebeccapurple" />
          <Input large color="goldenrod" placeholder="Goldenrod" />
        </ComponentsWrapperInner>
      </ComponentsWrapper>
    );
  }
}
