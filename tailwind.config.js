/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
  ],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '768px',
      'md': '1024px',
      'lg': '1280px',
      'xl': '1440px',
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'black': '#202020',
      'blue' : 'rgb(59, 142, 215)',
      'light-gray' : 'rgb(140, 140, 140)',
      'white': '#fff',
      'gray': '#E9E9E9',
      'dark-gray': '#262626',
      'gray-border' : '#D9D9D9',
      

    
    

    },

    container: {
      padding: '20px',
      center: true
    },
    extend: {
      fontFamily: {
        'Roboto': ['Roboto', 'regular'],
      }
    }
  },
  plugins: [],
}

