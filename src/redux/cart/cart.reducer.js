import { cartTypes } from './cart.types';
import { addItemsToCart } from './cart.utils';

const INITTIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITTIAL_STATE, action) => {
  switch (action.type) {
    case cartTypes.TOOGLE_CART:
      return {
        ...state,
        hidden: !state.hidden
      };
    case cartTypes.ADD_ITEMS:
      return {
        ...state,
        cartItems: addItemsToCart(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};

export default cartReducer;

// import { cartTypes } from './cart.types';

// const INITTIAL_STATE = {
//   hidden: true
// };

// const cartReducer = (state = INITTIAL_STATE, action) => {
//   switch (action.type) {
//     case cartTypes.TOGGLE_CART:
//       return {
//         ...state,
//         hidden: !state.hidden
//       };
//     default:
//       return state;
//   }
// };

// export default cartReducer;
