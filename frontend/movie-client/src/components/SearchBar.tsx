import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useState } from "react";

type SearchBarProps = {
  genres: string[];
  onSearchChange?: (searchTerm: string) => void;
  onGenreChange?: (genre: string) => void;
};

const SearchBar = ({
  genres,
  onSearchChange,
  onGenreChange,
}: SearchBarProps) => {
  const [selected, setSelected] = useState<string>("All");

  const handleTextFieldChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const movieName = event.target.value;
    if (onSearchChange) {
      onSearchChange(movieName);
    }
  };

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const genre = event.target.value;
    setSelected(genre);
    if (onGenreChange) {
      onGenreChange(genre);
    }
  };

  return (
    // <div className="searchBar">

    // </div>

    <Box
      sx={{
        justifyContent: "space-between",
        marginBottom: 2,
        marginTop: 2,
      }}
    >
      <TextField
        label="Filter by Movie Name"
        onChange={handleTextFieldChange}
        sx={{ marginRight: 10 }}
      />

      <FormControl sx={{ minWidth: 150 }}>
        <InputLabel>Filter by Genre</InputLabel>
        <Select
          value={selected}
          label="Filter by Genre"
          onChange={handleSelectChange}
        >
          <MenuItem value="All">All</MenuItem>

          {genres.map((genre: string) => (
            <MenuItem key={genre} value={genre}>
              {genre}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SearchBar;
