import express from 'express';
const versionsRoutes = express.Router({ mergeParams: true });
const recipesRoutes = express.Router();

versionsRoutes.use('recipes/:recipeId/versions/', recipesRoutes);
// Resource: versions
// Prepend recipes/:id/

// *B: GET recipes/:recipeId/versions/
versionsRoutes.get('/', (req, res) => {
  res.send('Hello from root');
});

// *R: GET recipes/:recipeId/versions/:versionId
//   - version of a recipe
versionsRoutes.get('/:versionId', (req, res) => {
  res.send(`Hello from get ${req.params.versionId}`);
});

// *A: POST recipes/:recipeId/versions/:versionId
//   - create a recipe version / FORKING a recipe
versionsRoutes.post('/:versionId', (req, res) => {
  res.send(`Hello from post ${req.params.versionId}`);
});

export default versionsRoutes;
