import { Movie } from "../types/Movies";
import axios from "axios";

import { PaginatedResult } from "../types/PaginatedResult";
import { getMoviesUrl } from "../utils/config";
import { PaginatedRequest } from "../types/PaginatedRequest";
import { MovieFilterParams } from "../types/MovieFilterParams";

const getMovies = async (
  request: PaginatedRequest<MovieFilterParams>
): Promise<PaginatedResult<Movie>> => {
  const moviesUrl = getMoviesUrl(request);

  const response = await axios.get<PaginatedResult<Movie>>(moviesUrl);
  return response.data;
};

const movieService = { getMovies };

export default movieService;
