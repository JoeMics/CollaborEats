import axios from '../lib/api';

export async function fetchData() {
  const response = await axios.get('/');
  return response;
}
