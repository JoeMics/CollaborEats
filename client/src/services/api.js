import axios from '../lib/api';

export async function fetchData() {
  const response = await axios.get('/');
  return response;
}

export async function getRecipe() {
  const response = await axios.get('/recipes/61e607f0311d699fd35f509e');
  return response;
}
// export async function createRecipe() {}
// await axios.get('/asdasdasdas');

// export async function forkRecipe() {}
// await axios.get('/');
// sdasdasdasdsa;
