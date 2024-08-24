import {createAsyncThunk} from "@reduxjs/toolkit";
import {IPizzaItem} from "./IPizza.ts";
import axios from "axios";

export const fetchPizzas = createAsyncThunk<IPizzaItem[], {category: string, sortProperty:string, currentPage: number}, {rejectValue: string}>(
    'pizzas/fetchPizzas',
    async (data, thunkAPI) => {
      try {
        const {category, sortProperty, currentPage} = data
        const response = await axios.get(
            `https://66b0c0f36a693a95b53a107f.mockapi.io/items?page=${currentPage}&limit=4&${category}${sortProperty}`
        );
        return response.data;

      } catch (e) {
        return thunkAPI.rejectWithValue("Не вдалось загрузити піцу")
      }
    }

)
