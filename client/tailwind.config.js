module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', //false or 'media'
  theme: {
    extend: {},
    container: {
      center: true,
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
