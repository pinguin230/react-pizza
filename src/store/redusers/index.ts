import {combineReducers} from "@reduxjs/toolkit";
import searchSlice from "./search/FilterSlice.ts";
import basketSlice from "./basket/BasketSlice.ts";
import pizzaSlice from "./pizza/PizzaSlice.ts";

const rootReducer = combineReducers({
  searchReducer: searchSlice,
  basketReducer: basketSlice,
  pizzaReducer: pizzaSlice
})

export default rootReducer;