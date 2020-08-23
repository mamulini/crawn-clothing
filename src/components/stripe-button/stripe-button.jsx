import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import PropTypes from 'prop-types';

import './stripe-button.styles.scss';

const StripeButton = ({ price }) => {
  const stripeKey =
    'pk_test_51HJHldDyEDkdNKThQ3qGf2YGUsTXhwQzwAJUVaxvX7ctloo8BlXxaDWdd0xNuWIVt6zOmDwwJd0WbQ1V2hGi1MEj00SEMOYQ3p';
  const stripePrice = price * 100;

  const tokenHandler = token => {
    console.log(token);
    alert('Your payment succesfully');
  };

  return (
    <StripeCheckout
      label="Pay now"
      name="CRAWN CLOTHING LTD."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total price is $${price}`}
      amount={stripePrice}
      panelLabel="Pay now"
      token={tokenHandler}
      stripeKey={stripeKey}
    />
  );
};

StripeButton.propTypes = {
  price: PropTypes.number
};

export default StripeButton;
