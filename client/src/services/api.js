import axios from '../lib/api';

export async function fetchData() {
  return await axios.get('/');
}

export async function addComment(ownerId, recipeId, content) {
  return await axios.post(`/recipes/${recipeId}/comments`, {
    ownerId,
    content,
  });
}
