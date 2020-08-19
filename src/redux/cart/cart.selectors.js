import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector([selectCart], cart => cart.cartItems);

export const hiddenSelector = createSelector([selectCart], cart => cart.hidden);

export const selectCartItemsCount = createSelector([selectCartItems], cartItems =>
  cartItems.reduce((totalQuantity, item) => totalQuantity + item.quantity, 0)
);

export const selectItemsTotalPrice = createSelector([selectCartItems], cartItems =>
  cartItems.reduce((total, item) => total + item.quantity * item.price, 0)
);
