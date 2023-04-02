/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  center: true,
  theme: {
    fontFamily: {
      html: [
        "Montserrat, sans-serif",
      ]
    },
    colors: {
      pageBackground: '#272727',
      main: '#FF3E3E',
      mainLight: '#FFCCCC',
      secondary: '#707070',
      transparent: 'transparent',
      white: 'white',
      black: '#272727',
      beige: '#e0e0e0',
      gray: {
        400: '#A3A3A3',
        500: '#737373',
        600: '#525252',
        700: '#404040',
      },
    },

    screens: {

      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '773px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }
      lp: { max: '320px' },
    },
    extend: {
      colors: {
        'regal-blue': '#243c5a',
      },
      backgroundImage: {
        background: "url('/src/assets/img/bgmain.jpg')",
        backgroundAll: "url('/src/assets/img/backgroundall.png')",
      },
    },
  },
  plugins: [],
};
