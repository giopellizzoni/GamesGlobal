using System.Text.Json;

using Movies.Service.API.Models;

namespace Movies.Service.API.Data;

public sealed class DataContext
    : IDataContext
{
    private const string FileName = "movies.json";
    private static readonly JsonSerializerOptions _options = new() { PropertyNameCaseInsensitive = true };

    public async Task<IEnumerable<Movie>> GetMoviesFromFile()
    {
        var fullPath = Path.Combine($"{Directory.GetCurrentDirectory()}\\Data", FileName);
        if (!File.Exists(fullPath))
        {
            return [];
        }

        var json = await File.ReadAllTextAsync(fullPath);
        var data = JsonSerializer.Deserialize<MoviesData>(json, _options);
        return data != null ? data.Movies : [];
    }
}
