import { useState } from 'react';
import { validateInput } from '../helpers/validation';

function useValidation() {
  const [formErrors, setFormErrors] = useState({});
  /*
   *params:
   *  form: Object, the controlled form state
   *  options: Object,
   *    ex. {title: {characterCount: 10}, description: {required: false}}
   */
  const validateForm = (form, options) => {
    const newErrors = {};

    // Validations for title, description, and instructions
    for (const field in form) {
      if (Array.isArray(field)) {
        // If it's an array of objects
        const arrOfErrors = field.map((inputs) => {
          // input = {name: 'something', amount: '1/2', unitOfMeasure: 'cups'}
          for (const input in inputs) {
            // Find the options for the object keys
            const validationOptions = options[field][input];
            inputs[input] = validateInput(inputs[input], validationOptions);
          }
          return inputs;
        });
        // Replace array of input objects, with error messages or null
        newErrors[field] = arrOfErrors;
      } else {
        // validating single key, value pairs
        const inputError = validateInput(form[field], options[field]);
        newErrors[field] = inputError;
      }
    }

    setFormErrors((prev) => ({ ...prev, newErrors }));
  };

  const hasErrors = () => {};

  return { validateForm, formErrors, setFormErrors };
}

export default useValidation;

// const newRecipe = { ...recipeForm };

// VALIDATION, to be moved to custom hook
// const validationOptions = {
//   title: { characterCount: 35 },
//   photo: { required: false },
// };

// let containsErrors = false;

// // Validations for title, description, and instructions
// for (const property in newRecipe) {
//   const inputError = validateInput(newRecipe[property], validationOptions[property]);
//   if (inputError) {
//     setFormError((prev) => {
//       return { ...prev, [property]: inputError };
//     });

//     containsErrors = true;
//   }
// }

// Validations for the ingredients section
// for (const ingredient of newRecipe.ingredients) {
//   const errors = {
//     amount: validateInput(ingredient.amount, { characterCount: 5 }),
//     ingredient: validateInput(ingredient.ingredient, {
//       characterCount: 30,
//     }),
//     unitOfMeasure: validateInput(ingredient.unitOfMeasure, {
//       required: false,
//     }),
//   };

//   const filteredErrors = {};

//   for (const error in errors) {
//     if (errors[error]) {
//       filteredErrors[error] = errors[error];
//       containsErrors = true;
//     }
//   }

//   setFormError((prev) => ({ ...prev, ...filteredErrors }));
// }

// if (containsErrors) return;
