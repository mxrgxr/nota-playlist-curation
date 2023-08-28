import sendRequest from "./send-request";
const BASE_URL = '/api/profiles';

export async function getUserProfile(accessToken) {
    return sendRequest(BASE_URL, 'GET', null, { Authorization: `Bearer ${accessToken}` });
}

export async function getUserTopTracks(accessToken) {
    return sendRequest(`${BASE_URL}/top/tracks`, 'GET', null, { Authorization: `Bearer ${accessToken}` });
}
  
  export async function getUserTopArtists(accessToken) {
    return sendRequest(`${BASE_URL}/top/artists`, 'GET', null, { Authorization: `Bearer ${accessToken}` });
}