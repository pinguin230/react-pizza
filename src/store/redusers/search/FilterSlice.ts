import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import IFilter from "./IFilter.ts";

const initialState: IFilter = {
  query: "",
  categoryId: 0,
  pagination: 1,
  sortBy: {name: "популярності (DESC)", sort: "rating"},
  order: "desc"
}

const filterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    setCategoryId: (state, action: PayloadAction<number>) => {
      state.categoryId = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },

    setPagination: (state, action: PayloadAction<number>) => {
      state.pagination = action.payload;
    },

    setSortBy: (state, action: PayloadAction<IFilter["sortBy"]>) => {
      state.sortBy = action.payload;
    },

    setFilters: (state, action) => {
      // state.query = action.payload.query;
      state.categoryId= action.payload.category;
      state.pagination = action.payload.page;
      state.sortBy = action.payload.sort;
      state.order = action.payload.order;
    }

  },
})

export const {setCategoryId, setFilters, setSearchQuery, setPagination, setSortBy} = filterSlice.actions;
export default filterSlice.reducer;