import axios from '../lib/api';
import awsAxios from 'axios';
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

export async function getSignedURL() {
  const { data } = await axios.get('/api/images/s3upload');
  return data;
}

export async function imageUpload(file, url) {
  try {
    await awsAxios(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: file,
    });
    const imageUrl = url.split('?')[0];
    return imageUrl;
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
