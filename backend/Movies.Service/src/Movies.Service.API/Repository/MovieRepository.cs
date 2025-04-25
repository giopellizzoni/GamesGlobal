using Movies.Service.API.Data;
using Movies.Service.API.Models;

namespace Movies.Service.API.Repository;

public class MovieRepository : IMovieRepository
{
    public Task<List<Movie>> GetMovies()
    {
        var movies = DataContext.GetMoviesFromFile();
        return Task.FromResult(movies);
    }
}
