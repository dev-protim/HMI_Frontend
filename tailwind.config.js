/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins", sans-serif', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'white': '#fcfcfc',
        'black': '#141414',
        'gray': '#bbbbbb',
        'primary-color': '#2b85ff'
      },
    },
  },
  plugins: [],
}

