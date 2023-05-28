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
                backgroundSecondary: {
                    dark: '#6F6D6D',
                    white: '#F2F2F2',
                },
                primary: {
                    dark: '#FFFFFF',
                    white: '#353535',
                },
                blue: {
                    dark: '#7A95B9',
                    white: '#277FF2',
                },
            },
            boxShadow: {
                'blue': '15px 20px 13px 0 rgba(39,127,242,0.5)',
            },
        }
    },
    plugins: [],
})