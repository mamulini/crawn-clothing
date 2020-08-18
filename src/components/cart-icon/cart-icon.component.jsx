import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './cart-icon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toogleCartHidden } from '../../redux/cart/cart.actions';

const CartIcon = ({ toogleCartHidden }) => (
  <div className="cart-icon" onClick={toogleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

CartIcon.propTypes = {
  toogleCartHidden: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  toogleCartHidden: () => dispatch(toogleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);
