import { cartTypes } from './cart.types';

const INITTIAL_STATE = {
  hidden: true
};

const cartReducer = (state = INITTIAL_STATE, action) => {
  switch (action.type) {
    case cartTypes.TOOGLE_CART:
      return {
        ...state,
        hidden: !state.hidden
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
