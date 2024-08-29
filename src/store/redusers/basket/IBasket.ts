export default interface IBasket {
  totalPrice: number;
  items: IBasketItem[]
}


export interface IBasketItem {
  id: string
  title: string
  price: number
  size: string
  type: string
  imageUrl: string
  count?: number
}