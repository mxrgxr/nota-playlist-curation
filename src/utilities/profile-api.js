import sendRequest from "./send-request";
const BASE_URL = '/api/profiles';

export async function getUserProfile(accessToken) {
    console.log('get')
    return sendRequest(BASE_URL, 'GET', null, { Authorization: `Bearer ${accessToken}` });
}