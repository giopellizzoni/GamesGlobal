using Movies.Service.API.Models;

namespace Movies.Service.API.Repository;

public interface IMovieRepository
{
    Task<List<Movie>> GetMovies();
}
