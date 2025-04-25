using Microsoft.AspNetCore.Mvc;

using Movies.Service.API.Services;

namespace Movies.Service.API.Controllers;

[ApiController]
[Route("[controller]")]
public class MovieController : ControllerBase
{

    private readonly IMovieService _movieService;

    public MovieController(IMovieService movieService)
    {
        _movieService = movieService;
    }

    [HttpGet]
    public async Task<IActionResult> GetMovies(
        [FromQuery] string? search,
        [FromQuery] string? genre)
    {
        var movies = await _movieService.GetMovies(search, genre);
        return Ok(movies);
    }
}
