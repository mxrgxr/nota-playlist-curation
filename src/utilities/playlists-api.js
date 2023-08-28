import sendRequest from "./send-request";
const BASE_URL = '/api/playlists';

export async function getUserPlaylists(accessToken) {
    return sendRequest(BASE_URL, 'GET', null, { Authorization: `Bearer ${accessToken}` });
}

export async function createPlaylist(playlistName, accessToken) {
    return sendRequest(BASE_URL, 'POST', { name: playlistName }, { Authorization: `Bearer ${accessToken}` });
}

export async function getPlaylistDetails(playlistId, accessToken){
    return sendRequest(`${BASE_URL}/${playlistId}`, 'GET', null, { Authorization: `Bearer ${accessToken}` });
}