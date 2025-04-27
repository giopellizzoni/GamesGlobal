import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";

import "./App.css";
import { Container, Typography } from "@mui/material";

import { useEffect, useState } from "react";
import { Movie } from "./types/Movies";
import { PaginatedResult } from "./types/PaginatedResult";
import { PaginatedRequest } from "./types/PaginatedRequest";
import { MovieFilterParams } from "./types/MovieFilterParams";
import movieService from "./services/movieService";

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [totalMoviesCount, setTotalMoviesCount] = useState<number>(0);
  const [pageIndex, setPageIndex] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [genres, setGenres] = useState<string[]>([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

  const handleSearchChange = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  const handleGenreChange = (genre: string) => {
    setSelectedGenre(genre);
  };

  useEffect(() => {
    // Reset pageIndex to 1 whenever searchTerm or selectedGenre changes
    setPageIndex(1);
  }, [searchTerm, selectedGenre]);

  useEffect(() => {
    const fetchMovies = async () => {
      if (pageIndex === undefined) return;
      const request: PaginatedRequest<MovieFilterParams> = {
        pageIndex,
        pageSize,
        params: {
          search: searchTerm,
          genre: selectedGenre === "All" ? "" : selectedGenre,
        },
      };

      console.log("request:", request);

      const result: PaginatedResult<Movie> = await movieService.getMovies(
        request
      );

      const genres = Array.from(
        new Set(result.items.flatMap((movie) => movie.genre))
      );

      setMovies(result.items);
      setTotalMoviesCount(result.totalCount);
      setGenres(genres);
      setPageIndex(result.page);
      setPageSize(result.pageSize);
    };
    fetchMovies();
  }, [pageIndex, pageSize, searchTerm, selectedGenre]);

  return (
    <Container className="App">
      <Typography variant="h3" gutterBottom>
        Movies Client
      </Typography>
      <SearchBar
        genres={genres}
        onSearchChange={handleSearchChange}
        onGenreChange={handleGenreChange}
      />
      <MovieList movies={movies} />

      <Typography variant="h6" gutterBottom>
        Total Movies: {totalMoviesCount}
      </Typography>
    </Container>
  );
};

export default App;
