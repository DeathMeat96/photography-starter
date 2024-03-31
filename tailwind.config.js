module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      primary: 'Playfair Display',
      secondary: 'Mulish',
    },
    screens: {
      sm: '300px',
      md: '1024px',
      lg: '1440px',
      xl: '1920px',
    },
    extend: {
      colors: {
        primary: '#0E1112',
        grey: '#484B4B',

        accent: '#EEF7F9',
      },
    },
  },
  plugins: [],
};