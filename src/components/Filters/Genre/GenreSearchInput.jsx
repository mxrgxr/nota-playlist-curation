import { Autocomplete } from "@mui/material";
import { TextField } from "@mui/material";

export default function GenreSearchInput({ genres, onSelectedGenresChange }) {
    return (
      <div>
        <Autocomplete
          multiple
          options={genres}
          onChange={(_event, value) => onSelectedGenresChange(value)}
          renderInput={(params) => (
            <TextField {...params} />
          )
        }
        />
      </div>
    );
}