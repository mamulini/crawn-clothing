import React from 'react';
import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import PropTypes from 'prop-types';

import './cart-icon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toogleCartHidden } from '../../redux/cart/cart.actions';

const CartIcon = ({ toogleCartHidden, cartCount }) => (
  <div className="cart-icon" onClick={toogleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{cartCount}</span>
  </div>
);

CartIcon.propTypes = {
  toogleCartHidden: PropTypes.func,
  cartCount: PropTypes.number
};

const mapDispatchToProps = dispatch => ({
  toogleCartHidden: () => dispatch(toogleCartHidden())
});

const mapStateToProps = state => ({
  cartCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
