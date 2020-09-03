import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import WithSpinner from '../with-spinner/with-spinner';
import CollectionOverview from './collection-overview';
import { selectIsCollectionsFetching } from '../../redux/shop/shop.selectors';

const mapStateToPtops = createStructuredSelector({
  isLoading: selectIsCollectionsFetching
});

const CollectionOverviewContainer = compose(
  connect(mapStateToPtops),
  WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
