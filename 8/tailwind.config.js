/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    scale:{
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
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
