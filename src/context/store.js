import React, { createContext, useReducer } from "react";
import combineReducers from "react-combine-reducers";

import { CART_INITIAL_STATE, cartReducer } from "./reducers/cartReducer";
import {
  MESSAGE_INITIAL_STATE,
  messageReducer
} from "./reducers/messageReducer";
import { ERROR_INITIAL_STATE, errorReducer } from "./reducers/errorReducer";
import { PRODUCT_INIIAL_SATE, productReducer } from "./reducers/productReducer";

const [rootReducerCombined, initialStateCombined] = combineReducers({
  cart: [cartReducer, CART_INITIAL_STATE],
  message: [messageReducer, MESSAGE_INITIAL_STATE],
  error: [errorReducer, ERROR_INITIAL_STATE],
  products: [productReducer, PRODUCT_INIIAL_SATE]
});

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(
    rootReducerCombined,
    initialStateCombined
  );
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext(initialStateCombined);
export default Store;
