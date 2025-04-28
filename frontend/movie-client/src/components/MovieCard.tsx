import { Card, CardContent, Chip, Stack, Typography } from "@mui/material";

type MovieCardProps = {
  title: string;
  year: number;
  genre: string[];
  director: string;
  actors: string[];
  rating: number;
};
const MovieCard = ({
  title,
  year,
  genre,
  director,
  actors,
  rating,
}: MovieCardProps) => {
  return (
    <Card
      variant="outlined"
      sx={{ width: 300, margin: 5, boxShadow: 1 }}
      elevation={2}
    >
      <CardContent>
        <Typography variant="h6">
          {title} ({year})
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          Direção: {director}
        </Typography>
        <Stack direction="row" spacing={1} my={1}>
          {genre.map((g) => (
            <Chip key={g} label={g} size="small" />
          ))}
        </Stack>
        <Typography variant="body2">Atores: {actors.join(", ")}</Typography>
        <Typography variant="body2">Nota: {rating}</Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
