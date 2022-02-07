import axios from '../lib/api';

// Comments

export async function addComment(ownerId, recipeId, content) {
  return await axios.post(`/recipes/${recipeId}/comments`, {
    ownerId,
    content,
  });
}

export async function fetchComments(recipeId) {
  return await axios.get(`/recipes/${recipeId}/comments`);
}

// Recipes

export async function fetchMasterRecipes() {
  return await axios.get('/recipes');
}

export async function fetchUserRecipes(ownerId) {
  return await axios.get(`/recipes/user/${ownerId}`);
}

export async function getRecipe(recipeId) {
  return await axios.get(`/recipes/${recipeId}`);
}

export async function getAllImages() {
  return await axios.get(`/upload`);
}

export async function uploadImage(file) {
  const formData = new FormData();
  formData.append('file', file);
  try {
    const response = await axios({
      method: 'post',
      url: `${process.env.REACT_APP_API_URL}/upload`,
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    console.log('the file name: ', response.data.file.filename);
    return response.data.file.filename;
  } catch (error) {
    return error;
  }
}

export async function mostRecentRecipe(recipeId) {
  return await axios.get(`/recipes/${recipeId}/recent`);
}

export async function mostForkedRecipe(recipeId) {
  return await axios.get(`/recipes/${recipeId}/mostForked`);
}

export async function addFork(ownerId, parentId, content) {
  return await axios.post(`/recipes/${parentId}/versions/`, {
    ownerId,
    ...content,
  });
}

export async function addRecipe(ownerId, content) {
  return await axios.post(`/recipes`, {
    ownerId,
    ...content,
  });
}

export async function simpleSearch(searchPhrase) {
  return await axios.post(`/recipes/search`, {
    searchPhrase,
  });
}

// Users

// returns mongoDB user
export async function fetchCurrentUser() {
  return await axios.post(`/users/check`);
}
