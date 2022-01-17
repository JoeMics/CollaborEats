import express from 'express';
import Recipe from '../models/recipe';
const versionsRoutes = express.Router({ mergeParams: true });
const recipesRoutes = express.Router();

versionsRoutes.use('recipes/:recipeId/versions/', recipesRoutes);
// Resource: versions
// Prepend recipes/:id/

// *R: GET recipes/:recipeId/versions/:versionId
//   - version of a recipe
versionsRoutes.get('/:versionId', async (req, res) => {
  const { versionId } = req.params;
  const recipe = await Recipe.findOne({ _id: versionId });

  res.send(recipe);
});

// *A: POST recipes/:recipeId/versions/:versionId
//   - create a recipe version / FORKING a recipe
versionsRoutes.post('/:versionId', (req, res) => {
  res.send(`Hello from post ${req.params.versionId}`);
});

export default versionsRoutes;
