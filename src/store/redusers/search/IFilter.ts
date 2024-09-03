

export default interface IFilter {
  query: string;
  pagination: number,
  categoryId: number,
  sortBy: { name: string, sort:  "rating" | "price" | "title" | "-rating" | "-price" | "-title"}
  order: string
}