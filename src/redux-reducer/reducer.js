import * as actionTypes from "./actionTypes";

const initialState = {
  basket: [],
  user: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_BASKET:
      console.log("Payload ==> ", action.payload);
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };

    case actionTypes.REMOVE_FROM_BASKET:
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      console.log(index);
      console.log(state.basket);
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`cant remove product (id: ${action.id}`);
      }
      return {
        ...state,
        basket: newBasket,
      };

    case actionTypes.SET_USER:
      console.log("ACTIon", action.user);
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
