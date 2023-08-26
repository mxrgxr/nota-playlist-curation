import sendRequest from "./send-request";
const BASE_URL = '/api/playlists';

export async function getUserPlaylists() {
    console.log('backend api get playlists triggered')
    return sendRequest(BASE_URL);
}