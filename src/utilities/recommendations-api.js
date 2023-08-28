import sendRequest from "./send-request";
const BASE_URL = '/api/recommendations';

export async function getRecommendations(data, accessToken) {
    return sendRequest(BASE_URL, 'POST', data, { Authorization: `Bearer ${accessToken}` });
}