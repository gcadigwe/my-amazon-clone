import * as actionTypes from "./actionTypes";

const initialState = {
  basket: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_BASKET:
      return {
        basket: [...state.basket, action.payload],
      };

    default:
      return state;
  }
};

export default reducer;
