import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import IFilter from "./IFilter.ts";

const initialState: IFilter = {
  query: "",
  pagination: 1,
  sortBy: {name: "популярності", sort: "rating"}
}

const filterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },

    setPagination: (state, action: PayloadAction<number>) => {
      state.pagination = action.payload;
    },

    setSortBy: (state, action: PayloadAction<IFilter["sortBy"]>) => {
      state.sortBy = action.payload;
    },

  },
})

export const {setSearchQuery, setPagination, setSortBy} = filterSlice.actions;
export default filterSlice.reducer;