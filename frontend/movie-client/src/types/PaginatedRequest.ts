export interface PaginatedRequest<T> {
  pageIndex: number;
  pageSize: number;
  params: T;
}
