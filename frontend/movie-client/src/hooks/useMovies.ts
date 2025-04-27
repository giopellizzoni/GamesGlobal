import { MovieFilterParams } from "../types/MovieFilterParams";
import { PaginatedRequest } from "../types/PaginatedRequest";
import { Movie } from "../types/Movies";
import { PaginatedResult } from "../types/PaginatedResult";
import { useEffect, useState } from "react";

import movieService from "../services/movieService";

export const useMovies = (
  search: string | undefined,
  genre: string | undefined,
  pageIndex: number = 1,
  pageSize: number = 10
) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [page, setPage] = useState<number>(0);
  const [size, setSize] = useState<number>(0);

  useEffect(() => {
    const fetchMovies = async () => {
      const request: PaginatedRequest<MovieFilterParams> = {
        pageIndex,
        pageSize,
        params: {
          search,
          genre,
        },
      };

      const result: PaginatedResult<Movie> = await movieService.getMovies(
        request
      );

      setMovies(result.items);
      setTotalCount(result.totalCount);
      setPage(result.page);
      setSize(result.pageSize);
    };
    fetchMovies();
  }, []);

  return { movies, totalCount, page, size };
};
