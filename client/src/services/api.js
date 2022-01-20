import axios from '../lib/api';

export async function fetchData() {
  return await axios.get('/recipes/61e607f0311d699fd35f509e');
}

export async function addComment(ownerId, recipeId, content) {
  return await axios.post(`/recipes/${recipeId}/comments`, {
    ownerId,
    content,
  });
}

export async function fetchComments(recipeId) {
  return await axios.get(`/recipes/${recipeId}/comments`);
}

export async function getRecipe() {
  return await axios.get('/recipes/61e60945bda713dc8a3f7427');
}

export async function addFork(ownerId, parentId, content) {
  return await axios.post(`/recipes/${parentId}/versions/`, {
    ownerId,
    content,
  });
}
// export async function createRecipe() {}
// await axios.get('/asdasdasdas');

// export async function forkRecipe() {}
// await axios.get('/');
// sdasdasdasdsa;
