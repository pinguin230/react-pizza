import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import IPizza, {IPizzaItem} from "./IPizza.ts";
import {fetchPizzas} from "./ActionCreators.ts";

const initialState: IPizza = {
  pizzas: [],
  isLoading: false,
  error: ''
}


const pizzaSlice = createSlice({
  name: "pizzas",
  initialState: initialState,
  reducers: {
    addPizza(state, action: PayloadAction<IPizzaItem[]>) {
      state.pizzas = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
        .addCase(fetchPizzas.fulfilled, (state, action: PayloadAction<IPizzaItem[]>) => {
          state.isLoading = false
          state.error = ''
          state.pizzas = action.payload;
        })
        .addCase(fetchPizzas.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(fetchPizzas.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload as string
          state.pizzas = []
        })
  }

})

export const {addPizza} = pizzaSlice.actions;
export default pizzaSlice.reducer;