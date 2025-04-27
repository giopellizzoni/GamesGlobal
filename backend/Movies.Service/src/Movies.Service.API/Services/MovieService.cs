using Movies.Service.API.Data;
using Movies.Service.API.DTO;
using Movies.Service.API.Models;

namespace Movies.Service.API.Services;

public sealed class MovieService : IMovieService
{
    private readonly IDataContext _dataContext;

    public MovieService(IDataContext dataContext)
    {
        _dataContext = dataContext;
    }

    public async Task<PaginatedResult<Movie>> GetMovies(PaginationRequest paginationRequest)
    {
        var movies = await _dataContext.GetMoviesFromFile();
        var moviesList = movies.ToList();

        var query = moviesList.AsQueryable();

        if (!string.IsNullOrWhiteSpace(paginationRequest.Search))
        {
            query = query.Where(m => m.Title.Contains(paginationRequest.Search, StringComparison.OrdinalIgnoreCase));
        }

        if (!string.IsNullOrWhiteSpace(paginationRequest.Genre))
        {
            query = query.Where(m => m.Genre.Contains(paginationRequest.Genre));
        }

        var pageIndex = paginationRequest.PageIndex;
        var pageSize = paginationRequest.PageSize;

        var filteredMovies = query.Skip((pageIndex - 1) * pageSize)
            .Take(pageSize)
            .ToList();

        var totalCount = filteredMovies.Count;

        return new PaginatedResult<Movie>(pageIndex, pageSize, totalCount, filteredMovies);
    }
}
