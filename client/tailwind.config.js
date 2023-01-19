/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const withMT = require("@material-tailwind/react/utils/withMT");


module.exports = withMT({
    darkMode: 'class',
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: {
                    dark: '#4D4D4D',
                    white: '#FFFFFF',
                },
                backgroundSecondary: '#277ff280',
                primary: {
                    dark: '#FFFFFF',
                    white: '#353535',
                },
                blue: {
                    dark: '#7A95B9',
                    white: '#277FF2',
                },
            },
        }
    },
    plugins: [],
})