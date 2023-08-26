import sendRequest from "./send-request";
const BASE_URL = '/api/playlists';

export async function getUserPlaylists(accessToken) {
    return sendRequest(BASE_URL, 'GET', null, { Authorization: `Bearer ${accessToken}` });
}