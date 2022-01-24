const IngredientInput = ({ setRecipeForm, recipeForm, index, formError }) => {
  const changeHandler = (e) => {
    const { name } = e.target;
    const { value } = e.target;

    setRecipeForm((prev) => {
      const ingredients = [...prev.ingredients];
      ingredients[index] = { ...ingredients[index], [name]: value };

      return { ...prev, ingredients };
    });
  };

  const deleteInput = () => {
    setRecipeForm((prev) => {
      const ingredients = [...prev.ingredients];
      ingredients.splice(index, 1);

      return { ...prev, ingredients };
    });
  };

  return (
    <div class="flex mb-2">
      <div class="w-1/2 px-3">
        <label htmlFor="ingredient" class="block font-semibold">
          Ingredient
        </label>
        <input
          className={
            formError.title
              ? 'w-full px-4 py-2 border-2 mb-3 bg-red-50 border-red-500 text-red-900 placeholder-red-700 rounded-sm outline-none focus:ring-red-500 focus:border-red-500 blockp-2.5 dark:bg-red-100 dark:border-red-400 font-serif'
              : 'appearance-none block w-full border-2 py-2 px-4 border-gray-lighter rounded-sm outline-none dark:bg-dark-700 dark:border-dark-500  focus:border-blue-400 transition duration-200 ease-in-out'
          }
          type="text"
          name="ingredient"
          placeholder={formError.ingredient ? 'none' : 'Ground Beef'}
          value={recipeForm.ingredients[index].ingredient}
          onChange={changeHandler}
        />
      </div>
      <div class="w-1/2 px-3">
        <label htmlFor="amount" className="block font-semibold">
          Amount
        </label>
        <input
          className={
            formError.amount
              ? 'w-full px-4 py-2 border-2 mb-3 bg-red-50 border-red-500 text-red-900 placeholder-red-700 rounded-sm outline-none focus:ring-red-500 focus:border-red-500 blockp-2.5 dark:bg-red-100 dark:border-red-400 font-serif'
              : 'appearance-none block w-full border-2 py-2 px-4 border-gray-lighter rounded-sm outline-none dark:bg-dark-700 dark:border-dark-500 focus:border-blue-400 transition duration-200 ease-in-out'
          }
          type="text"
          name="amount"
          value={recipeForm.ingredients[index].amount}
          onChange={changeHandler}
          placeholder={formError.amount ? 'none' : '1'}
        />
      </div>
      <div class="w-1/2 px-3">
        <label htmlFor="unit-of-measure" className="block font-semibold">
          Unit of Measure
        </label>
        <input
          class={
            formError.unitOfMeasure
              ? 'w-full px-4 py-2 border-2 mb-3 bg-red-50 border-red-500 text-red-900 placeholder-red-700 rounded-sm outline-none focus:ring-red-500 focus:border-red-500 blockp-2.5 dark:bg-red-100 dark:border-red-400 font-serif'
              : 'appearance-none block w-full border-2 py-2 px-4 border-gray-lighter rounded-sm outline-none dark:bg-dark-700 dark:border-dark-500 focus:border-blue-400 transition duration-200 ease-in-out'
          }
          type="text"
          placeholder={formError.unitOfMeasure ? 'blank' : 'lb'}
          name="unitOfMeasure"
          value={recipeForm.ingredients[index].unitOfMeasure}
          onChange={changeHandler}
        />
      </div>
      <div className="mt-7 cursor-pointer">
        <svg
          onClick={deleteInput}
          xmlns="http://www.w3.org/2000/svg"
          className="h-9 w-9 hover:text-red-700 transition duration-300 ease-in-out"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </div>
    </div>
  );
};

export default IngredientInput;
