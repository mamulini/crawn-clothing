import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { selectItemsTotalPrice } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item';
import StripeButton from '../../components/stripe-button/stripe-button';
import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, totalPrice }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-clock">
        <span>Product</span>
      </div>
      <div className="header-clock">
        <span>Description</span>
      </div>
      <div className="header-clock">
        <span>Quantity</span>
      </div>
      <div className="header-clock">
        <span>Price</span>
      </div>
      <div className="header-clock">
        <span>Remove</span>
      </div>
    </div>

    {cartItems.map(item => (
      <CheckoutItem key={item.id} cartItem={item} />
    ))}
    <div className="total">TOTAL : ${totalPrice}</div>
    <div className="test-warning">
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - EXP: 01/22 - CVV: 123
    </div>
    <StripeButton price={totalPrice} />
  </div>
);

CheckoutPage.propTypes = {
  cartItems: PropTypes.array,
  totalPrice: PropTypes.number
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectItemsTotalPrice
});

export default connect(mapStateToProps)(CheckoutPage);
