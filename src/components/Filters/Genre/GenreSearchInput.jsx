import { Autocomplete } from "@mui/material";
import { TextField } from "@mui/material";

export default function GenreSearchInput({ genres, onSelectedGenresChange }) {
  return (
    <div className="bg-s-50 rounded-lg w-1/4">
      <Autocomplete
        multiple
        options={genres}
        onChange={(_event, value) => onSelectedGenresChange(value)}
        renderInput={(params) => <TextField {...params} />}
      />
    </div>
  );
}