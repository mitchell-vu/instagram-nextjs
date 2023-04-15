/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        'nav-narrow': 72,
        'nav-medium': 244,
        'nav-wide': 335,
      },
    },
  },
  plugins: [],
};
