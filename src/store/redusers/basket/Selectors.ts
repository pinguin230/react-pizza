import {RootState} from "../../store.ts";

export const selectPizzaItemById = (id: string) => (state: RootState) => state.basketReducer.items.find((obj) => obj.id === id)
