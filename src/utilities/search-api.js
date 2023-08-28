import sendRequest from "./send-request";
const BASE_URL = '/api/search';

export async function searchArtists(searchTerm, accessToken) {
  return sendRequest(BASE_URL, 'POST', { searchTerm }, { Authorization: `Bearer ${accessToken}` });
}