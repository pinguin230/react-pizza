import {RootState} from "../../store.ts";

export const selectSortBy = (state: RootState) => state.searchReducer.sortBy
export const selectCurrentPage = (state: RootState) => state.searchReducer.pagination
