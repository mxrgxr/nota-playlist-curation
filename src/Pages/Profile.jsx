import LogOut from "../components/Profile/LogOut"
import ProfileHeader from "../components/Profile/ProfileHeader"
import TopItems from "../components/Profile/TopItems"
import { useState, useEffect } from 'react';
import * as profileAPI from '../utilities/profile-api';

export default function Profile(){
    const [displayName, setDisplayName] = useState('');
    console.log('display name', displayName)
    const [profilePhoto, setProfilePhoto] = useState('');
    console.log('profile photo set')
    const [topTracks, setTopTracks] = useState([]);
    console.log('toptracks', topTracks)

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
        <div>
        <ProfileHeader displayName={displayName} profilePhoto={profilePhoto} />
        <TopItems topTracks={topTracks} />
        <LogOut />
        </div>
    )
}