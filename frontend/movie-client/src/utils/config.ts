import { MovieFilterParams } from "../types/MovieFilterParams";
import { PaginatedRequest } from "../types/PaginatedRequest";

const apiUrl = "http://localhost:5288/api";

export const getMoviesUrl = ({
  pageIndex,
  pageSize,
  params,
}: PaginatedRequest<MovieFilterParams>) => {
  const { search, genre } = params;
  let url = `${apiUrl}/movie?pageIndex=${pageIndex}&pageSize=${pageSize}`;
  if (search) {
    url += `&search=${search}`;
  }
  if (genre) {
    url += `&genre=${genre}`;
  }
  return url;
};
