/** @type {import('tailwindcss').Config} */
module.exports = {
  // Inline <script> blocks are scanned too, so classes applied via classList/className in JS are included.
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        ink: '#0B0B0C',
        charcoal: '#18181A',
        slate: {
          DEFAULT: '#3A3A3D',
          soft: '#6B6B6E',
        },
        silver: '#E4E4E3',
        mist: '#F1F0EE',
        paper: '#FAFAF8',
        gold: {
          DEFAULT: '#C7A248',
          dim: '#8F7635',
          pale: '#E8DAB6',
        },
      },
      fontFamily: {
        display: ['"Outfit"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      maxWidth: {
        container: '1320px',
      },
    },
  },
  plugins: [],
};
