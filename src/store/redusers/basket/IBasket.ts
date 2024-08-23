export default interface IBasket {
  totalPrice: number;
  items: IBasketItem[]
}


export interface IBasketItem {
  id: number
  title: string
  price: number
  size: string
  type: string
  imageUrl: string
  count?: number
}