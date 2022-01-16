export default [
  {
    _id: '1a',
    path: [],
    parent: null,
    ownerId: '1',
    title: 'Cweamy Alfwedo Sauce UwU',
    description: 'Simple and quick recipe for a 5 minute alfredo sauce. Great with pasta!',
    ingredients: [
      { ingredient: 'heavy cream', amount: 100, unitOfMeasure: 'ml' },
      { ingredient: 'butter', amount: 0.25, unitOfMeasure: 'cups' },
    ],
    instructions:
      'Put butter into a small sauce pan on a medium to low flame. Once the butter has melted pour in the heavy cream and allow to simmer. Gently stir to avoid over boiling.',
  },
  {
    _id: '2a',
    path: [1],
    parent: 1,
    ownerId: '1',
    title: 'Add Pepper',
    description:
      'Building on the previous fork, I decided to add an ungodly amount of pepper to the sauce.',
    ingredients: [
      { ingredient: 'heavy cream', amount: 100, unitOfMeasure: 'ml' },
      { ingredient: 'butter', amount: 0.25, unitOfMeasure: 'cups' },
      { ingredient: 'fine ground black pepper', amount: 4, unitOfMeasure: 'table spoons' },
    ],
    instructions:
      'Put butter into a small sauce pan on a medium to low flame. Once the butter has melted pour in the heavy cream and allow to simmer. Gently stir to avoid over boiling. Add the black pepper to the sauce and stir well to evenly distribute the pepper in the sauce',
  },
  {
    _id: '3a',
    path: [1, 2],
    parent: 2,
    ownerId: '1',
    title: 'Too much pepper and not enough garlic :(',
    description:
      'Reducing the amount of pepper in the sauce and adding minced/chopped garlic to the sauce!',
    ingredients: [
      { ingredient: 'heavy cream', amount: 100, unitOfMeasure: 'ml' },
      { ingredient: 'butter', amount: 0.25, unitOfMeasure: 'cups' },
      { ingredient: 'fine ground black pepper', amount: 1.5, unitOfMeasure: 'table spoons' },
      { ingredient: 'garlic', amount: 3, unitOfMeasure: 'cloves' },
    ],
    instructions:
      'Finely chop or mince garlic cloves. Put butter into a small sauce pan on a medium to low flame. Once the butter has melted add the garlic and leave until fragrent. Once the garlic is fragrent, pour in the heavy cream and allow to simmer. Gently stir to avoid over boiling. Add the black pepper to the sauce and stir well to evenly distribute the pepper in the sauce',
  },
  {
    _id: '4a',
    path: [1, 2],
    parent: 2,
    ownerId: '2',
    title: 'My Family Recipe',
    description:
      "This is the recipe my asian grandmother used to make for us. This technically makes no sense because I doubt she would make a alfredo sauce but hey I don't make the rules.",
    ingredients: [
      { ingredient: 'heavy cream', amount: 100, unitOfMeasure: 'ml' },
      { ingredient: 'butter', amount: 0.25, unitOfMeasure: 'cups' },
      { ingredient: 'fine ground black pepper', amount: 1.5, unitOfMeasure: 'table spoons' },
      { ingredient: 'garlic', amount: 3, unitOfMeasure: 'cloves' },
      { ingredient: 'grated parmesan cheese', amount: 0.75, unitOfMeasure: 'cups' },
    ],
    instructions:
      "Finely chop or mince garlic cloves. Put butter into a small sauce pan on a medium to low flame. Once the butter has melted add the garlic and leave until fragrent. Once the garlic is fragrent, pour in the heavy cream and allow to simmer. Gently stir to avoid over boiling. Add the black pepper to the sauce and stir well to evenly distribute the pepper in the sauce. Finally add the cheese into the sauce and stir until melted. Don't forget to save some for garnish!",
  },
  {
    _id: '5a',
    path: [],
    parent: null,
    ownerId: '1a',
    title: 'Eggy Omelettes',
    description: 'Simple and quick recipe for a moe moe omelette!',
    ingredients: [
      { ingredient: 'egg', amount: 5, unitOfMeasure: 'eggs' },
      { ingredient: 'butter', amount: 1, unitOfMeasure: 'cup' },
    ],
    instructions: 'Add butter to pan on low heat. Beat the eggs, and cook until done!!!',
  },
  {
    _id: '6a',
    path: ['5a'],
    parent: '5a',
    ownerId: '1a',
    title: 'Eggy Weggy Omelettes',
    description: 'Simple and quick recipe for a moe moe omelette!',
    ingredients: [
      { ingredient: 'egg', amount: 10, unitOfMeasure: 'eggs' },
      { ingredient: 'butter', amount: 1, unitOfMeasure: 'cup' },
    ],
    instructions: 'Add butter to pan on low heat. Beat the eggs, and cook until done!!!',
  },
  {
    _id: '7a',
    path: ['5a'],
    parent: '5a',
    ownerId: '1a',
    title: 'Eggy Weggiest Omelettes',
    description: 'Simple and quick recipe for a moe moe omelette!',
    ingredients: [
      { ingredient: 'egg', amount: 6, unitOfMeasure: 'eggs' },
      { ingredient: 'butter', amount: 1, unitOfMeasure: 'cup' },
    ],
    instructions: 'Add butter to pan on low heat. Beat the eggs, and cook until done!!!',
  },
];
