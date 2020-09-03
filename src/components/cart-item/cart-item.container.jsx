import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/cart-item';

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

const CartItemContainer = connect(mapStateToProps)(CartItem);

export default CartItemContainer;
