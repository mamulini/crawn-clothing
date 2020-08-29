import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './collection-item.styles.scss';

import CustomButton from '../custom-button/custom-button';
import { addItemToCart } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item, addItemToCart }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton className="custom-button" onClick={() => addItemToCart(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

CollectionItem.propTypes = {
  item: PropTypes.object,
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  imageUrl: PropTypes.string,
  addItemToCart: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItemToCart(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
