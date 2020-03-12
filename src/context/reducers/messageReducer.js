import { messageTypes } from "../types";

export const MESSAGE_INITIAL_STATE = null;

export const messageReducer = (state, action) => {
  switch (action.type) {
    case messageTypes.CLEAR_MESSAGE:
      return MESSAGE_INITIAL_STATE;
    case messageTypes.SET_MESSAGE:
      return action.payload;
    default:
      return state;
  }
};
