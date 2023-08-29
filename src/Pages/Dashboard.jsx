import NavBar from "../components/NavBar/NavBar";
import CreatePlaylist from "../components/Dashboard/CreatePlaylist";
import PlaylistGrid from "../components/Dashboard/PlaylistGrid";

export default function Dashboard() {
  return (
    <div className=" bg-p-800">
      <NavBar />
      <div className="flex flex-col ml-48 p-12">
        <div className="flex justify-between">
          <p className="text-h-lg font-header text-lt-ntr">Dashboard</p>
          <CreatePlaylist />
        </div>
        <PlaylistGrid />
      </div>
    </div>
  );
}