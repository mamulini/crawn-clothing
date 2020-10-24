import React from 'react';
import PropTypes from 'prop-types';

import {
  CartItemContainer,
  CartItemDetails,
  CartItemEmpty,
  CartItemName,
  CartItemPrice
} from './cart-item.style';

const CartItem = ({ cartItems }) => {
  return cartItems.length ? (
    cartItems.map(cartItem => (
      <CartItemContainer key={cartItem.id}>
        <img src={cartItem.imageUrl} alt="item" />
        <CartItemDetails>
          <CartItemName>{cartItem.name}</CartItemName>
          <CartItemPrice>
            {cartItem.quantity} x ${cartItem.price}
          </CartItemPrice>
        </CartItemDetails>
      </CartItemContainer>
    ))
  ) : (
    <CartItemEmpty> The cart is empty </CartItemEmpty>
  );
};

CartItem.propTypes = {
  cartItems: PropTypes.array
};

export default CartItem;
