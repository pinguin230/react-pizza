import {IBasketItem} from "../store/redusers/basket/IBasket.ts";

export const calcTotalPrice = (items: IBasketItem[]) => {
  return items.reduce((acc, pizza) => {
    return acc + pizza.count * pizza.price;
  }, 0)

}