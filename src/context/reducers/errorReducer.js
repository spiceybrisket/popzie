import { errorTypes } from "../types";

export const ERROR_INITIAL_STATE = null;

export const errorReducer = (state, action) => {
  switch (action.type) {
    case errorTypes.CLEAR_ERROR:
      return ERROR_INITIAL_STATE;
    case errorTypes.SET_ERROR:
      return action.payload;
    default:
      return state;
  }
};
