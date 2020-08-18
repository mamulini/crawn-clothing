import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './cart-dropdown.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>Go to checkout</CustomButton>
  </div>
);

CartDropdown.propTypes = {
  cartItems: PropTypes.array
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});

export default connect(mapStateToProps)(CartDropdown);
