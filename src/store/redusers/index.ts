import {combineReducers} from "@reduxjs/toolkit";
import searchSlice from "./search/FilterSlice.ts";

const rootReducer = combineReducers({
  searchReducer: searchSlice
})

export default rootReducer;