namespace Movies.Service.API.DTO;

public record PaginationRequest(string? Search, string? Genre, int PageIndex = 0, int PageSize = 10);

public class PaginatedResult<TEntity>
{
    public PaginatedResult(
        int pageIndex,
        int pageSize,
        long totalCount,
        List<TEntity> items)
    {
        PageIndex = pageIndex;
        PageSize = pageSize;
        TotalCount = totalCount;
        Items = items;
    }

    public int PageIndex { get; }
    public int PageSize { get; }
    public long TotalCount { get; }
    public List<TEntity> Items { get; }
}
