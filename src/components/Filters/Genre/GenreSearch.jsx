import GenreSearchInput from "./GenreSearchInput";
import {useState} from 'react';
import { genres } from "./genres";

export default function GenreSearch(props) {
  const [selectedGenres, setSelectedGenres] = useState();

  const handleSelectedGenresChange = (newSelectedGenres) => {
    setSelectedGenres(newSelectedGenres);
    props.onSelectedGenresChange(newSelectedGenres);
  };

  return (
    <div>
      <p>Search for genres</p>
      <GenreSearchInput
        genres={genres}
        onSelectedGenresChange={handleSelectedGenresChange}
      />
    </div>
  );
}