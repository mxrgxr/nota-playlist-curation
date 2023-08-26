import NavBar from "../components/NavBar/NavBar"
import CreatePlaylist from "../components/Dashboard/CreatePlaylist"
import PlaylistGrid from "../components/Dashboard/PlaylistGrid"

export default function Dashboard(){
    return(
        <div className="flex">
            <NavBar />
            <div className="flex bg-p-800 w-screen h-screen p-12 justify-between">
                <p className="text-h-lg font-header text-lt-ntr">Dashboard</p>
                <CreatePlaylist />
            </div>
            <div>
                <PlaylistGrid />
            </div>
        </div>
    )
}