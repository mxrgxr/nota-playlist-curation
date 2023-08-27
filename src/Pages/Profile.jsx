import LogOut from "../components/Profile/LogOut"
import ProfileHeader from "../components/Profile/ProfileHeader"
import TopItems from "../components/Profile/TopItems"

export default function Profile(){
    return(
        <div>
        <ProfileHeader displayName={displayName} profilePhoto={profilePhoto} />
        <TopItems topTracks={topTracks} />
        <LogOut />
      </div>
    )
}