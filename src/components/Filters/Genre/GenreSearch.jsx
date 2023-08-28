import GenreSearchInput from "./GenreSearchInput";
import {useState} from 'react';
import { genres } from "./genres";

export default function GenreSearch() {
  const [selectedGenres, setSelectedGenres] = useState();

  const handleSelectedGenresChange = (newSelectedGenres) => {
    setSelectedGenres(newSelectedGenres);
  };

  return (
    <div>
      <GenreSearchInput
        genres={genres}
        onSelectedGenresChange={handleSelectedGenresChange}
      />
    </div>
  );
}