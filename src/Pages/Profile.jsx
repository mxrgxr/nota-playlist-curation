import LogOut from "../components/Profile/LogOut"
import ProfileHeader from "../components/Profile/ProfileHeader"
import TopItems from "../components/Profile/TopItems"
import NavBar from "../components/NavBar/NavBar";
import { useState, useEffect } from 'react';
import * as profileAPI from '../utilities/profile-api';

export default function Profile(){
    const [displayName, setDisplayName] = useState('');
    const [profilePhoto, setProfilePhoto] = useState('');
    const [topTracks, setTopTracks] = useState([]);

    useEffect(() => {
        async function fetchUserProfile() {
            try {
                const accessToken = localStorage.getItem('accessToken');
                const userProfile = await profileAPI.getUserProfile(accessToken);

                setDisplayName(userProfile.display_name);
                setProfilePhoto(userProfile.images[0].url);
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        }

        fetchUserProfile();
    }, []);

    return(
        <div className="flex h-screen bg-p-800 text-lt-ntr">
            <NavBar />
            <div className="p-12 space-y-8">
                <ProfileHeader displayName={displayName} profilePhoto={profilePhoto} />
                <TopItems topTracks={topTracks} />
                <LogOut />
            </div>
        </div>
    )
}