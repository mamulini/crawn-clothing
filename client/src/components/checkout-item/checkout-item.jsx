import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  clearItemsFromCart,
  removeItemQuantity,
  addItemToCart
} from '../../redux/cart/cart.actions';

import {
  ImageContainer,
  Name,
  CheckoutItemContainer,
  Price,
  Quantity,
  RemoveButton
} from './checkout-item.style';

const CheckoutItem = ({ cartItem, clearItemsFromCart, removeItemQuantity, addItemToCart }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <div className="arrow" onClick={() => removeItemQuantity(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemToCart(cartItem)}>
          &#10095;
        </div>
      </Quantity>
      <Price>${price}</Price>
      <RemoveButton onClick={() => clearItemsFromCart(cartItem)}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
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
