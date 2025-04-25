using System.Text.Json;

using Movies.Service.API.Models;

namespace Movies.Service.API.Data;

public class DataContext
{
    private const string FileName = "movies.json";

    private static JsonSerializerOptions options = new() { PropertyNameCaseInsensitive = true };

    public static List<Movie> GetMoviesFromFile()
    {
        var fullPath = Path.Combine($"{Directory.GetCurrentDirectory()}\\Data", FileName);
        if (!File.Exists(fullPath))
        {
            return [];
        }

        var json = File.ReadAllText(fullPath);
        var data = JsonSerializer.Deserialize<MoviesData>(json, options);
        return data != null ? data.Movies : [];
    }
}
