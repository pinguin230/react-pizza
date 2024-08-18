export default interface IFilter {
  query: string;
  pagination: number,
  sortBy: { name: string, sort: string }
}