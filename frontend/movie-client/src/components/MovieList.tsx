import { Typography } from "@mui/material";
import { Movie } from "../types/Movies";
import MovieCard from "./MovieCard";
import "./MovieList.css";

type MovieListProps = {
  movies: Movie[];
};

const MovieList = ({ movies }: MovieListProps) => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Movies
      </Typography>
      <div className="movieList">
        {movies.map((movie) => (
          <MovieCard key={movie.title} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
