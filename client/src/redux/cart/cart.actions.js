import CartActionTypes from './cart.types';

export const toogleCartHidden = () => ({
  type: CartActionTypes.TOOGLE_CART
});

export const addItemToCart = item => ({
  type: CartActionTypes.ADD_ITEMS,
  payload: item
});

export const removeItemQuantity = item => ({
  type: CartActionTypes.REMOVE_QUANTITY,
  payload: item
});

export const clearItemsFromCart = item => ({
  type: CartActionTypes.REMOVE_ITEMS_FROM_CART,
  payload: item
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART
});
