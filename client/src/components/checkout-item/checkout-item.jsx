import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  clearItemsFromCart,
  removeItemQuantity,
  addItemToCart
} from '../../redux/cart/cart.actions';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, clearItemsFromCart, removeItemQuantity, addItemToCart }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <div className="arrow" onClick={() => removeItemQuantity(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemToCart(cartItem)}>
          &#10095;
        </div>
      </div>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => clearItemsFromCart(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

CheckoutItem.propTypes = {
  cartItem: PropTypes.object,
  name: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  imageUrl: PropTypes.string,
  clearItemsFromCart: PropTypes.func,
  removeItemQuantity: PropTypes.func,
  addItemToCart: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  clearItemsFromCart: cartItem => dispatch(clearItemsFromCart(cartItem)),
  removeItemQuantity: cartItem => dispatch(removeItemQuantity(cartItem)),
  addItemToCart: cartItem => dispatch(addItemToCart(cartItem))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
