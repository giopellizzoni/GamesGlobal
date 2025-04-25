using System.Text.Json;

using Movies.Service.API.Models;

namespace Movies.Service.API.Data;

public interface IDataContext
{
    Task<IEnumerable<Movie>> GetMoviesFromFile();
}

public class DataContext
    : IDataContext
{
    private const string FileName = "movies.json";
    private static JsonSerializerOptions options = new() { PropertyNameCaseInsensitive = true };

    public async Task<IEnumerable<Movie>> GetMoviesFromFile()
    {
        var fullPath = Path.Combine($"{Directory.GetCurrentDirectory()}\\Data", FileName);
        if (!File.Exists(fullPath))
        {
            return [];
        }

        var json = await File.ReadAllTextAsync(fullPath);
        var data = JsonSerializer.Deserialize<MoviesData>(json, options);
        return data != null ? data.Movies : [];
    }
}
