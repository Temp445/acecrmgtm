/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'sml': '425px',
        'smm': '410px',
        'xxl': '1430px',
        'xml': '1600px',
        '3xl': '1730px',
        'xxxl': '1920px',

      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
