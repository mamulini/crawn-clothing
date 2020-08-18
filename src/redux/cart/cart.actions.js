import { cartTypes } from './cart.types';

export const toogleCartHidden = () => ({
  type: cartTypes.TOOGLE_CART
});

export const addItem = item => ({
  type: cartTypes.ADD_ITEMS,
  payload: item
});
