using Movies.Service.API.Models;

namespace Movies.Service.API.Services;

public interface IMovieService
{
    Task<List<Movie>> GetMovies(string? search, string? genre);
}
