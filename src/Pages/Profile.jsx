import LogOut from "../components/Profile/LogOut"
import ProfileHeader from "../components/Profile/ProfileHeader"
import TopItems from "../components/Profile/TopItems"
import NavBar from "../components/NavBar/NavBar";
import { useState, useEffect } from 'react';
import * as profileAPI from '../utilities/profile-api';

export default function Profile(){
    const [user, setUser] = useState(null);
    const [displayName, setDisplayName] = useState('');
    const [profilePhoto, setProfilePhoto] = useState('');
    const [topTracks, setTopTracks] = useState([]);
    const [topArtists, setTopArtists] = useState([]);
  
    useEffect(() => {
      async function fetchUserProfile() {
        const accessToken = localStorage.getItem('accessToken');
        const userProfile = await profileAPI.getUserProfile(accessToken);
        const userTopTracks = await profileAPI.getUserTopTracks(accessToken);
        const userTopArtists = await profileAPI.getUserTopArtists(accessToken);
  
        setDisplayName(userProfile.display_name);
        setProfilePhoto(userProfile.images[0].url);
        setTopTracks(userTopTracks.items);
        setTopArtists(userTopArtists.items);
      }
  
      fetchUserProfile();
    }, []);

    return (
        <div className="flex w-full bg-p-800">
            <NavBar />
            <div className="flex flex-col p-8 space-y-8">
            <ProfileHeader displayName={displayName} profilePhoto={profilePhoto} />
            <div className="flex flex-row space-x-8">
                <TopItems topItems={topArtists} type="Artists" />
                <TopItems topItems={topTracks} type="Tracks" />
            </div>
            <LogOut setUser={setUser} />
            </div>
        </div>
    );
}