const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
       'spin-reverse': {
          '0%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(-360deg)'} 
        },
      },
      animation: {
        spin: "spin 2s linear infinite",
        'spin-reverse': "spin-reverse 2s linear infinite"
      }

    },
    colors: {
      myCustom: {
        first: "#a21caf",
        second: "#9333ea"
      },
      gray: colors.gray,
      black: colors.black,
      white:colors.white,
    }
  },
  plugins: [],
}
