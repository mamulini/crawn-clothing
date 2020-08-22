import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import './shop.styles.scss';

import CollectionOverview from '../../components/collection-overview/collection-overview';
import CollectionPage from '../collection-page/collection';

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

ShopPage.propTypes = {
  match: PropTypes.object
};

export default ShopPage;
