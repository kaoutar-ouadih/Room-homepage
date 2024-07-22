/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        darkGray: 'hsl(0, 0%, 63%)',
        veryDarkGray: 'hsl(0, 0%, 27%)',
      },
      fontFamily: {
        LeagueSpartan: ['League Spartan'],
      },
      animation:{
        drop: 'drop 1.1s 1',
        cover: 'cover 1s 1',
      },
      keyframes:{
        drop:{
          '0%':{ transform: 'translateY(-100%)'},
          '100%':{ transform: 'translateY(0)'}
        },
        cover:{
          '0%':{transform: 'translateX(-80%)',},
          '100%':{transform: 'translateX(0)',} 
        },
      },
      screens: {
        'lg': '980px',
      },
    },
  },
  plugins: [],
}

