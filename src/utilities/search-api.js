import sendRequest from "./send-request";
const BASE_URL = '/api/search';

export async function searchArtists(searchTerm, accessToken) {
  const response = await sendRequest(BASE_URL, 'POST', { searchTerm }, { Authorization: `Bearer ${accessToken}` });
  return response.data;
}