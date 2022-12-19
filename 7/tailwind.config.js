/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      spacing:{
        13:"2.4rem"
      },
      fontSize:{
        '10xl': ['10rem', { lineHeight: '2' }],
      }
    },
  },
  plugins: [],
}
