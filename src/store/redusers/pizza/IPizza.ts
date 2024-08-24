
export interface IPizzaItem {
  category: number;
  id: number;
  imageUrl: string;
  price: number;
  rating: number;
  sizes: number[];
  title: string
  types: number[]
}

export default interface IPizza {
  pizzas: IPizzaItem[],
  isLoading: boolean,
  error: string | ''
}