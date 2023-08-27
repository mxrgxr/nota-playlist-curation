import PlaylistHeader from "../components/PlaylistDetails/PlaylistHeader"
import GetRecommendations from "../components/PlaylistDetails/GetRecommendations"
import TrackList from "../components/PlaylistDetails/TrackList"

export default function PlaylistDetails(){
    return(
        <div>
            <PlaylistHeader playlistName={playlistName} description={description} />
            <GetRecommendations />
            <TrackList tracks={tracks} />
        </div>
    )
}