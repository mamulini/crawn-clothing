import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/collection-preview';
import { StyledCollectionsOverview } from './collection-overview.style';
// import './collection-overview.styles.scss';

const CollectionOverview = ({ collections }) => (
  <StyledCollectionsOverview>
    {collections.map(({ id, ...otherCollectionsProps }) => (
      <CollectionPreview key={id} {...otherCollectionsProps} />
    ))}
  </StyledCollectionsOverview>
);

CollectionOverview.propTypes = {
  collections: PropTypes.array
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
