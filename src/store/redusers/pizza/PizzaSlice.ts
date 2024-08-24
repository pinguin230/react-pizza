import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import IPizza, {IPizzaItem} from "./IPizza.ts";

const initialState: IPizza = {
  pizzas: []
}


const basketSlice = createSlice({
  name: "basket",
  initialState: initialState,
  reducers: {
    addPizza(state, action: PayloadAction<IPizzaItem[]>) {
      state.pizzas = action.payload;
    }
  },
})

export const {addPizza} = basketSlice.actions;
export default basketSlice.reducer;