import GenreDropdown from "./GenreDropdown"
import SelectedGenreChip from "./SelectedGenreChip"
import GenreSearchInput from "./GenreSearchInput"

export default function GenreSearch(){
    return(
        <div>
            <GenreDropdown />
            <SelectedGenreChip />
            <GenreSearchInput />
        </div>
    )
}