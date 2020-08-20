import { cartTypes } from './cart.types';

export const toogleCartHidden = () => ({
  type: cartTypes.TOOGLE_CART
});

export const addItemToCart = item => ({
  type: cartTypes.ADD_ITEMS,
  payload: item
});

export const removeItemQuantity = item => ({
  type: cartTypes.REMOVE_QUANTITY,
  payload: item
});

export const clearItemsFromCart = item => ({
  type: cartTypes.REMOVE_ITEMS_FROM_CART,
  payload: item
});
