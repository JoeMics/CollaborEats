# User Stories

## Template

As a **\_\_**, I want to **\_\_**, because **\_\_**.

## Accounts

- As a user I want to sign up for an account, because I want to use the application.
- As a user I want to log in to my account, because I want to use the application.
- As a User, I want to edit/update my user information because my information changes over time.
- ~~As a User want to delete/archive my account because I no longer want to use the app~~

## Recipes

- As a User, I want to create recipes, because I want to store my recipes.
- As a User, I want to “create”(fork) new versions for a recipe, because I want to develope someone elses or my recipe.
- As a User, I want to see all the versions for a recipe, because I want to see all the version in a tree diagram.
- As a User, I want to browse all recipes, because see the available recipes.
- As a user, I want to browse my recipes, because I only care about my recipes.
- As a User, I want to search for recipes by name, because I want to find a specific recipe.
- As a User, I want to search for recipes by tags, because I want to find what is most relevant to me
- ~~As a user I want to delete/archive my recipes because I don't want them to be seen~~

## User Interaction

- As a user, I want to comment on a recipe, because i want to give feedback
- As a user, I want to rate a recipe, because I want to show that I like a recipe

---

# User Scenarios

A user scenario is a syntactic alternative to user stories

Template: Given **\_**, when **\_\_**, then **\_\_**.

- Given that I am viewing a recipe, when I click on "fork this recipe", a new version of the recipe will be created and added to my "forked list"
- Given that I am creating a recipe, when I want people to see it, then I can add tags to my recipes.

---

# Resources (ie: nouns)

- User
- Recipes
- ? Version : Master Recipe Id in Recipes Table
- Comment
- Rating
- Tags

---

# Route Planning

```
Resource: recipes

B: GET /recipes
  - Every single master recipe
R: GET /recipes/:id
  - specific recipe tree
E: POST /recipes/:id/edit
  -
A: POST /recipes
D: POST /recipes/:id/delete
```

```
Resource: versions
Prepend recipes/:id/

B: GET recipes/:recipeId
R: GET recipes/:recipeId/:id
  - version of a recipe
E: POST recipes/:recipeId/:id/edit
  - edit a recipe version
A: POST recipes/recipeId
  - create a recipe version
D: POST recipes/recipeId/:id/delete
```

---

```
Resource: users

B: GET /users
  - All users
R: GET /users/:id
  - Single users
E: POST /users/:id/edit
  - Edit user info
A: POST /users
  - User registration
D: POST /users/:id/delete
  - Delete user account
```

---

```
Resource: comments
Prepend recipes/:id/

B: GET /comments
  - All comments of a recipe version
R: GET /comments/:id
  - Single comments
E: POST /comments/:id/edit
  - Edit comment
A: POST /comments
  - Create a comment
D: POST /comments/:id/delete
  - Delete a comment
```

---

```
Resource: ratings
Prepend recipes/:id/

B: GET /ratings
  - All ratings of a recipe version
R: GET /ratings/:id
  - Single ratings
E: POST /ratings/:id/edit
  - Edit rating
A: POST /ratings
  - rate a recipe version
D: POST /ratings/:id/delete
  - Delete a rating
```

---

```
Resource: tags ????????????????????????????????????
Prepend recipes/

B: GET /tags
  - All tags of a master recipe
R: GET /tags/?=querystring
  - Single tags
E: POST /tags/:id/edit
  - Edit tag
A: POST /tags
  - add a tag to master recipe
D: POST /tags/:id/delete
  - Delete a tag
```

MASTER RECIPE: THE WHOLE TREE

https://www.collaboreats.api/recipes/3432/23232
