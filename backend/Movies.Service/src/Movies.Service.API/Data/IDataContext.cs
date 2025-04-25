using Movies.Service.API.Models;

namespace Movies.Service.API.Data;

public interface IDataContext
{
    Task<IEnumerable<Movie>> GetMoviesFromFile();
}
