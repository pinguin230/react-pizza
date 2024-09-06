import {createAsyncThunk} from "@reduxjs/toolkit";
import {IPizzaItem} from "./IPizza.ts";
import axios from "axios";

type FetchPizzaProps = { category: string, sortProperty: string, currentPage: number }
export const fetchPizzas = createAsyncThunk<IPizzaItem[], FetchPizzaProps, { rejectValue: string }>(
    'pizzas/fetchPizzas',
    async ({category, sortProperty, currentPage}, thunkAPI) => {
      try {
        const response = await axios.get(
            `https://66b0c0f36a693a95b53a107f.mockapi.io/items?page=${currentPage}&limit=8&${category}${sortProperty}`
        );
        return response.data;

      } catch (e) {
        return thunkAPI.rejectWithValue("Не вдалось загрузити піцу")
      }
    }
)
