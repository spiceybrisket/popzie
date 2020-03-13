import { cartTypes } from "../types";

export const CART_INITIAL_STATE = {};

export const cartReducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case cartTypes.ADD_ITEM:
      return { ...state, [action.payload.id]: action.payload };
    case cartTypes.REMOVE_ITEM:
      return state;
    default:
      return state;
  }
};
