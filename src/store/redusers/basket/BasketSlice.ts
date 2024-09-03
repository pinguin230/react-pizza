import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import IBasket, {IBasketItem} from "./IBasket.ts";
import {RootState} from "../../store.ts";

const initialState: IBasket = {
  totalPrice: 0,
  items: []
}

const calculateTotalPrice = (items: IBasketItem[]): number => {
  return items.reduce((total, item) => total + item.price * item.count, 0);
};


const basketSlice = createSlice({
  name: "basket",
  initialState: initialState,
  reducers: {
    addItem(state, action: PayloadAction<IBasketItem>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++
      } else {
        state.items.push({...action.payload, count: 1});
      }

      state.totalPrice = calculateTotalPrice(state.items);
    },
    deleteItem(state, action: PayloadAction<string>){
      state.items = state.items.filter(item => item.id !== action.payload);
      state.totalPrice = calculateTotalPrice(state.items);
    },
    clearItem(state) {
      state.items = [];
      state.totalPrice = calculateTotalPrice(state.items);
    },
    increaseItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find((obj) => obj.id === action.payload);

      if (findItem) {
        findItem.count++;
      }
      state.totalPrice = calculateTotalPrice(state.items);
    },
    decreaseItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find((obj) => obj.id === action.payload);

      if (findItem) {
        findItem.count--;

        if(findItem.count < 1) {
          findItem.count = 1;
        }
      }
      state.totalPrice = calculateTotalPrice(state.items);
    }


  },
})

export const selectPizzaItemById = (id: string) => (state: RootState) => state.basketReducer.items.find((obj) => obj.id === id)

export const {decreaseItem, increaseItem, addItem, deleteItem, clearItem} = basketSlice.actions;
export default basketSlice.reducer;