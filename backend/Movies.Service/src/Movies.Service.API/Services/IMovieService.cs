using Movies.Service.API.DTO;
using Movies.Service.API.Models;

namespace Movies.Service.API.Services;

public interface IMovieService
{
    Task<PaginatedResult<Movie>> GetMovies(PaginationRequest paginationRequest);
}
