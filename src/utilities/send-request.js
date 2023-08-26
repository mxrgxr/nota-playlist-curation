import { getToken } from './users-service';

export default async function sendRequest(url, method = 'GET', payload = null, headers = {}) {
  const options = { method };
  if (payload) {
    options.headers = { 'Content-Type': 'application/json', ...headers };
    options.body = JSON.stringify(payload);
  } else {
    options.headers = headers;
  }
  const token = getToken();
  if (token) {
    options.headers.Authorization = `Bearer ${token}`;
  }
  const res = await fetch(url, options);
  if (res.ok) return res.json();
  throw new Error('Bad Request');
}