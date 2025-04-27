import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";

import "./App.css";
import { Container, Typography } from "@mui/material";
import { useMovies } from "./hooks/useMovies";

const App = () => {
  const { movies, totalCount, page, size } = useMovies("", "");

  return (
    <Container className="App">
      <Typography variant="h3" gutterBottom>
        Movies Client
      </Typography>
      <SearchBar genres={["Movie1", "Movie2"]} />
      <MovieList movies={movies} />
    </Container>
  );
};

export default App;
