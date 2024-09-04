import {calcTotalPrice} from "./calcTotalPrice.ts";
import {IBasketItem} from "../store/redusers/basket/IBasket.ts";

export const getPizzasFromLS = () => {
  const data = localStorage.getItem("pizzas")
  const items = data ? JSON.parse(data) : []
  const totalPrice = calcTotalPrice(items)

  if (items.length) {
    return {
      totalPrice: totalPrice as number,
      items: items as IBasketItem[]
    }
  } else {
    return {
      totalPrice: 0,
      items: []
    }
  }
}