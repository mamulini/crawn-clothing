import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item';
import {
  CollectionItemsContainer,
  CollectionPreviewContainer,
  PreviewTitle
} from './collection-preview.style';

const CollectionPreview = ({ title, items, history, match }) => (
  <CollectionPreviewContainer>
    <PreviewTitle onClick={() => history.push(`${match.url}/${title.toLowerCase()}`)}>
      {title.toUpperCase()}
    </PreviewTitle>
    <CollectionItemsContainer>
      {items
        .filter((item, i) => i < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </CollectionItemsContainer>
  </CollectionPreviewContainer>
);

CollectionPreview.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
  history: PropTypes.object,
  match: PropTypes.object
};

export default withRouter(CollectionPreview);
