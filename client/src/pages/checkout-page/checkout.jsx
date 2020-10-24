import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { selectItemsTotalPrice } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item';
import {
  CheckoutHeader,
  CheckoutPageContainer,
  HeaderBlock,
  StyledStripeButton,
  TestWarning,
  TotalPrice
} from './checkout.style';

const CheckoutPage = ({ cartItems, totalPrice }) => (
  <CheckoutPageContainer>
    <CheckoutHeader>
      <HeaderBlock>
        <span>Product</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Details</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Quantity</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Price</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Remove</span>
      </HeaderBlock>
    </CheckoutHeader>

    {cartItems.map(item => (
      <CheckoutItem key={item.id} cartItem={item} />
    ))}
    <TotalPrice>TOTAL : ${totalPrice}</TotalPrice>
    <TestWarning>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - EXP: 01/22 - CVV: 123
    </TestWarning>
    <StyledStripeButton price={totalPrice} />
  </CheckoutPageContainer>
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
