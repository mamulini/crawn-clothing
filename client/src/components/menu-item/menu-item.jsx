import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import {
  MenuItemContainer,
  BackgroundImage,
  ContentContainer,
  Title,
  Subtitle
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => (
  <MenuItemContainer large={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <BackgroundImage imageUrl={imageUrl} />
    <ContentContainer>
      <Title>{title.toUpperCase()}</Title>
      <Subtitle>SHOP NOW</Subtitle>
    </ContentContainer>
  </MenuItemContainer>
);

MenuItem.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  size: PropTypes.string,
  history: PropTypes.object,
  match: PropTypes.object,
  linkUrl: PropTypes.string
};

export default withRouter(MenuItem);
