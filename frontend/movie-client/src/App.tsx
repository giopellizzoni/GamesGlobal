import MovieList from "./pages/MovieList";
import SearchBar from "./pages/SearchBar";

import "./App.css";
import { Container, Typography } from "@mui/material";

const App = () => {
  return (
    <Container className="App">
      <Typography variant="h3" gutterBottom>
        Movies
      </Typography>
      <SearchBar genres={["Movie1", "Movie2"]} />
      <MovieList />
    </Container>
  );
};

export default App;
