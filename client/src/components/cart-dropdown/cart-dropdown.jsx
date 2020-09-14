import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './cart-dropdown.styles.scss';
import { toogleCartHidden } from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button';
import CartItemContainer from '../cart-item/cart-item.container';

const CartDropdown = ({ history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      <CartItemContainer />
    </div>
    <CustomButton
      onClick={() => {
        history.push('/checkout');
        dispatch(toogleCartHidden());
      }}
    >
      Go to checkout
    </CustomButton>
  </div>
);

CartDropdown.propTypes = {
  history: PropTypes.object,
  dispatch: PropTypes.func
};

export default withRouter(connect()(CartDropdown));
