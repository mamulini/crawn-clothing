import React from 'react';
import PropTypes from 'prop-types';

import './cart-item.styles.scss';

const CartItem = ({ cartItems }) => {
  return cartItems.length ? (
    cartItems.map(cartItem => (
      <div className="cart-item" key={cartItem.id}>
        <img src={cartItem.imageUrl} alt="item" />
        <div className="item-details">
          <span className="name">{cartItem.name}</span>
          <span className="price">
            {cartItem.quantity} x ${cartItem.price}
          </span>
        </div>
      </div>
    ))
  ) : (
    <div className="empty-message"> The cart is empty </div>
  );
};

CartItem.propTypes = {
  cartItems: PropTypes.array
};

export default CartItem;
