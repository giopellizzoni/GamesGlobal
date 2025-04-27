import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";

import "./App.css";
import { Container, Typography } from "@mui/material";
import { useMovies } from "./hooks/useMovies";

const App = () => {
  const { movies, totalCount, page, size } = useMovies("", "");

  const moviesGenres = Array.from(
    new Set(movies.flatMap((movie) => movie.genre))
  );

  return (
    <Container className="App">
      <Typography variant="h3" gutterBottom>
        Movies Client
      </Typography>
      <SearchBar genres={moviesGenres} />
      <MovieList movies={movies} />

      <Typography variant="h6" gutterBottom>
        Total Movies: {totalCount}
      </Typography>
    </Container>
  );
};

export default App;
