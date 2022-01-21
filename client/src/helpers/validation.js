/* Returns an error message if validation fails
 * Returns null if validation passes
 * Options:
 *  characterCount = Number
 */
const validateInput = (input, options = {}) => {
  if (!input || input === '') return 'Cannot be blank.';

  if (options.characterCount) {
    if (input.length > options.characterCount)
      return `Cannot be longer than ${options.characterCount} characters.`;
  }

  return null;
};

export default validateInput;
