namespace Movies.Service.API.DTO;

public sealed record PaginationRequest(string? Search, string? Genre, int PageIndex = 0, int PageSize = 10);
