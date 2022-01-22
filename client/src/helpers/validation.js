/* Returns an error message if validation fails
 * Returns null if validation passes
 * Options:
 *  characterCount = Number
 *  required = Boolean, default true
 */
export const validateInput = (input, { characterCount, required = true }) => {
  if (required) {
    if (!input || input === '') return 'Cannot be blank.';
  }

  if (characterCount) {
    if (input.length > characterCount) return `Cannot be longer than ${characterCount} characters.`;
  }

  return null;
};
