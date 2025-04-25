namespace Movies.Service.API.Models;

public record MoviesData(
    List<Movie> Movies
);

public record Movie(
    string Title,
    int Year,
    string[] Genre,
    string Director,
    string[] Actors,
    double Rating
);
