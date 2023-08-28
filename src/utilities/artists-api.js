import sendRequest from "./send-request";

export async function searchArtists(searchTerm) {
  const response = await sendRequest('/api/artists/search', 'POST', { searchTerm });
  return response.data;
}