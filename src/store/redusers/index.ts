import {combineReducers} from "@reduxjs/toolkit";
import searchSlice from "./search/FilterSlice.ts";
import basketSlice from "./basket/BasketSlice.ts";

const rootReducer = combineReducers({
  searchReducer: searchSlice,
  basketReducer: basketSlice
})

export default rootReducer;