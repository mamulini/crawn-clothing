import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { updateCollections, loadingFinished } from '../../redux/shop/shop.actions';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import './shop.styles.scss';

import CollectionOverview from '../../components/collection-overview/collection-overview';
import CollectionPage from '../collection-page/collection';
import WithSpinner from '../../components/with-spinner/with-spinner';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections, loadingFinished } = this.props;

    const collectionRef = firestore.collection('collections');
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      loadingFinished();
    });
  }

  render() {
    const { match, loading } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => <CollectionOverviewWithSpinner isLoading={loading} {...props} />}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => <CollectionPageWithSpinner isLoading={loading} {...props} />}
        />
      </div>
    );
  }
}

ShopPage.propTypes = {
  match: PropTypes.object,
  loading: PropTypes.bool,
  updateCollections: PropTypes.func,
  loadingFinished: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap)),
  loadingFinished: () => dispatch(loadingFinished())
});

const mapStateToProps = ({ shop: { loading } }) => ({
  loading
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
