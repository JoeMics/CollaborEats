import express from 'express';
import Recipe from '../models/recipe';
import versionsRoute from './version';
import commentsRoute from './comment';
const router = express.Router();

router.use('/:recipeId/versions/', versionsRoute);
router.use('/:recipeId/comments/', commentsRoute);

router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.find({ parent: null });
    if (!recipes) {
      throw new Error('Recipe not found');
    }
    res.send(recipes);
  } catch (err) {
    return res.send(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findOne({ _id: req.params.id });
    const recipeTree = await Recipe.find({ path: req.params.id });
    if (!recipe) {
      throw new Error('Recipe not found');
    }
    res.send({ recipe, recipeTree });
  } catch (err) {
    return res.send(err);
  }
});

router.get('/user/:ownerId', async (req, res) => {
  try {
    const recipes = await Recipe.find({ ownerId: req.params.ownerId });
    if (!recipes) {
      throw new Error('Recipes not found');
    }
    res.send(recipes);
  } catch (err) {
    return res.send(err);
  }
});

router.get('/:id/recent', async (req, res) => {
  try {
    const recipe = await Recipe.findOne({ _id: req.params.id });
    const recipeTree = await Recipe.find({ path: req.params.id }).sort({ createdAt: 'desc' });
    if (!recipe && !recipeTree) {
      throw new Error('Recipes not found');
    }

    if (recipeTree.length > 0) {
      res.send(recipeTree[0]);
    } else {
      res.send(recipe);
    }
  } catch (err) {
    return res.send(err);
  }
});

router.get('/:id/mostForked', async (req, res) => {
  try {
    const recipe = await Recipe.findOne({ _id: req.params.id });
    const recipeTree = await Recipe.find({ path: req.params.id });

    if (!recipe || !recipeTree) {
      throw new Error('Recipe not found');
    }

    if (recipeTree.length > 0) {
      res.send(recipeTree);
    } else {
      res.send(recipe);
    }
  } catch (err) {
    return res.send(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const { ownerId, title, description, ingredients, instructions, photo } = req.body;
    const recipe = new Recipe({
      path: [],
      parent: null,
      ownerId,
      title,
      description,
      ingredients,
      instructions,
      photo,
    });
    await recipe.save();
    res.send(recipe);
  } catch (err) {
    res.status(500).json({ err: err });
  }
});

export default router;

router.post('/search', async (req, res) => {
  console.log(req.body.title);
  const recipes = await await Recipe.find({
    $and: [{ title: { $regex: req.body.title, $options: 'i' } }, { parent: null }],
  });
  console.log(recipes);
  res.send(recipes);
});
