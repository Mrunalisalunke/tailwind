/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary:'#FF6363',

      },
      backgroundColor: {
        'secondary-100': 'pink',
      },
      fontFamily:{
        body:['Nunito'],
      }
    },
  },
  plugins: [],
}

