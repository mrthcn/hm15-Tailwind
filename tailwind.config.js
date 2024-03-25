/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  // darkMode: 'selector',
  theme: {
    extend: {
      textColor: {
        tomato: 'tomato',
      },
      fontFamily: {
        main: ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

