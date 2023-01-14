/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            background: {
                dark: '#4D4D4D',
                white: '#FFFFFF'
            }
        },
    }
  },
  plugins: [],
}
