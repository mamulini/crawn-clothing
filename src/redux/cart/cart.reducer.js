import { cartActionTypes } from './cart.types';
import { addItemsToCart, removeQuantity } from './cart.utils';

const INITTIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITTIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOOGLE_CART:
      return {
        ...state,
        hidden: !state.hidden
      };
    case cartActionTypes.ADD_ITEMS:
      return {
        ...state,
        cartItems: addItemsToCart(state.cartItems, action.payload)
      };
    case cartActionTypes.REMOVE_QUANTITY:
      return {
        ...state,
        cartItems: removeQuantity(state.cartItems, action.payload)
      };
    case cartActionTypes.REMOVE_ITEMS_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(cartITem => cartITem.id !== action.payload.id)
      };
    default:
      return state;
  }
};

export default cartReducer;
