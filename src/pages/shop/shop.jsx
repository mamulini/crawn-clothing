import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchCollectionsAsync } from '../../redux/shop/shop.actions';
import './shop.styles.scss';

import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';
import CollectionPageContainer from '../collection-page/collection-page.container';

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsAsync } = this.props;
    fetchCollectionsAsync();
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
      </div>
    );
  }
}

ShopPage.propTypes = {
  match: PropTypes.object,
  fetchCollectionsAsync: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionsAsync: () => dispatch(fetchCollectionsAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);
