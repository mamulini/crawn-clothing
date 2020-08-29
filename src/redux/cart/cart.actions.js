import { cartActionTypes } from './cart.types';

export const toogleCartHidden = () => ({
  type: cartActionTypes.TOOGLE_CART
});

export const addItemToCart = item => ({
  type: cartActionTypes.ADD_ITEMS,
  payload: item
});

export const removeItemQuantity = item => ({
  type: cartActionTypes.REMOVE_QUANTITY,
  payload: item
});

export const clearItemsFromCart = item => ({
  type: cartActionTypes.REMOVE_ITEMS_FROM_CART,
  payload: item
});
