/* Returns an error message if validation fails
 * Returns null if validation passes
 * Options:
 *  characterCount = Number
 *  required = Boolean, default true
 */
export const validateInput = (input, options = { characterCount: null, required: true }) => {
  const defaultOptions = {
    characterCount: null,
    required: true,
    ...options,
  };

  if (defaultOptions.required) {
    if (!input || input === '') return 'Cannot be blank.';
  }

  if (defaultOptions.characterCount) {
    if (input.length > defaultOptions.characterCount)
      return `Cannot be longer than ${defaultOptions.characterCount} characters.`;
  }

  return null;
};
