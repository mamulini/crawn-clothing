// import SHOP_DATA from './shop.data';
import { shopActionTypes } from './shop.types';

const INITTIAL_STATE = {
  collections: null,
  loading: true
};

const shopReducer = (state = INITTIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      };
    case shopActionTypes.LOADING_HANDLER:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default shopReducer;
