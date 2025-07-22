// export interface Page<T> {
//   content: T[];
//   totalElements: number;
//   totalPages: number;
//   number: number;
//   size: number;
// }


export interface Page<T> {
  content: T[];
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
}