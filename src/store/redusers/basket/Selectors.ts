import {RootState} from "../../store.ts";

export const selectPizzaItemById = (id: string) => (state: RootState) => state.basketReducer.items.filter((obj) => obj.id === id)
