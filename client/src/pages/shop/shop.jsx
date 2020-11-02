import React, { useEffect, Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import Spinner from '../../components/spinner/spinner';

const CollectionOverviewContainer = lazy(() =>
  import('../../components/collection-overview/collection-overview.container')
);
const CollectionPageContainer = lazy(() => import('../collection-page/collection-page.container'));

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
      </Suspense>
    </div>
  );
};

ShopPage.propTypes = {
  match: PropTypes.object,
  fetchCollectionsStart: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
