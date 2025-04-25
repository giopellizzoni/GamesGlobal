using Movies.Service.API.Models;
using Movies.Service.API.Repository;

namespace Movies.Service.API.Services;

public class MovieService : IMovieService
{
    private readonly IMovieRepository _movieRepository;

    public MovieService(IMovieRepository movieRepository)
    {
        _movieRepository = movieRepository;
    }

    public async Task<List<Movie>> GetMovies(
        string? search,
        string? genre)
    {
        var movies = await _movieRepository.GetMovies();
        if(!string.IsNullOrEmpty(search) && string.IsNullOrEmpty(genre))
        {
              return movies
                  .Where(m => m.Title.Contains(search, StringComparison.OrdinalIgnoreCase)
                              && m.Genre.Contains(genre))
                  .ToList();
        }

        return movies;
    }
}
