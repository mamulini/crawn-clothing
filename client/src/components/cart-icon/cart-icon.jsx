import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import { toogleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { StyledCartIcon, StyledItemCount, StyledShopingIcon } from './cart-icon.style';

const CartIcon = ({ toogleCartHidden, cartCount, open }) => (
  <StyledCartIcon open={open} onClick={toogleCartHidden}>
    <StyledShopingIcon />
    <StyledItemCount>{cartCount}</StyledItemCount>
  </StyledCartIcon>
);

CartIcon.propTypes = {
  toogleCartHidden: PropTypes.func,
  cartCount: PropTypes.number,
  open: PropTypes.bool
};

const mapDispatchToProps = dispatch => ({
  toogleCartHidden: () => dispatch(toogleCartHidden())
});

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
