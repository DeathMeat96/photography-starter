module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      primary: 'Playfair Display',
      secondary: 'Mulish',
    },
    screens: {
      sm: '400px',
      md: '1080px',
      lg: '1920px',
      xl: '2000px',
    },
    extend: {
      colors: {
        primary: '#0E1112',
        grey: '#484B4B',

        accent: '#EEF7F9',
      },
      backgroundImage: {
        explosion: 'url("img/Bg1.png")',
        circles: 'url("/bg-circles.png")',
        circleStar: 'url("/circle-star.svg")',
        site: 'url("/Bg1.png")',
      },
    },
  },
  plugins: [],
};