import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item';
import {
  CollectionPageContainer,
  CollectionPageItems,
  CollectionPageTitle
} from './collection-page.style';

const CollectionPage = ({ collection }) => {
  const { items, title } = collection;
  return (
    <CollectionPageContainer>
      <CollectionPageTitle>{title}</CollectionPageTitle>
      <CollectionPageItems>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionPageItems>
    </CollectionPageContainer>
  );
};

CollectionPage.propTypes = {
  collection: PropTypes.object
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
