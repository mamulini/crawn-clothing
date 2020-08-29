import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item';
import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items, history, match }) => (
  <div className="collection-preview">
    <h1 className="title" onClick={() => history.push(`${match.url}/${title.toLowerCase()}`)}>
      {title.toUpperCase()}
    </h1>
    <div className="preview">
      {items
        .filter((item, i) => i < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

CollectionPreview.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
  history: PropTypes.object,
  match: PropTypes.object
};

export default withRouter(CollectionPreview);
