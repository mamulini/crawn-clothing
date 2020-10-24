import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { toogleCartHidden } from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button';
import CartItemContainer from '../cart-item/cart-item.container';
import { CartDropdownContainer, CartItems } from './cart-dropdown.style';

const CartDropdown = ({ history, dispatch }) => {
  const ref = useRef(null);

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      dispatch(toogleCartHidden());
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  return (
    <CartDropdownContainer ref={ref}>
      <CartItems>
        <CartItemContainer />
      </CartItems>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toogleCartHidden());
        }}
      >
        Go to checkout
      </CustomButton>
    </CartDropdownContainer>
  );
};

CartDropdown.propTypes = {
  history: PropTypes.object,
  dispatch: PropTypes.func
};

// const mapDispatchToProps = dispatch => ({
//   toogleCartHidden: () => dispatch(toogleCartHidden())
// });

export default withRouter(connect()(CartDropdown));
