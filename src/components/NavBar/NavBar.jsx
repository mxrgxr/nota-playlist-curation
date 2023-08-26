import DashboardMenuItem from "./Menu/DashboardMenuItem"
import ProfileMenuItem from "./Menu/ProfileMenuItem"
import CreatePlaylist from "../Dashboard/CreatePlaylist"

export default function NavBar(){
    return(
        <div className="flex flex-col bg-p-100 items-center space-y-16">
            <img className="w-32 m-8" src="/logo-sm.svg" />
            <DashboardMenuItem />
            <CreatePlaylist variant="navbar"/>
            <ProfileMenuItem />
        </div>
    )
}