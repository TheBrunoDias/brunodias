/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        main: {
          300: '#00EB98',
          500: '#009E66',
          900: '#006B46',
        },
        light: {
          300: '#FCFCFC',
          500: '#F0F0F0',
          900: '#D6D6D6',
        },
        dark: {
          300: '#332F2E',
          500: '#161616',
          900: '#000000',
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        sm: ['clamp(1.00rem, calc(0.92rem + 0.39vw), 1.20rem)', '1.4'],
        base: ['clamp(1.13rem, calc(0.98rem + 0.73vw), 1.50rem)', '1.5'],
        lg: ['clamp(1.27rem, calc(1.03rem + 1.19vw), 1.88rem)', '1.4'],
        xl: ['clamp(1.42rem, calc(1.06rem + 1.80vw), 2.34rem)', '1.4'],
        '2xl': ['clamp(1.60rem, calc(1.08rem + 2.59vw), 2.93rem)', '1.2'],
        '3xl': ['clamp(1.80rem, calc(1.08rem + 3.63vw), 3.66rem)', '1.1'],
        '4xl': ['clamp(2.03rem, calc(1.03rem + 4.98vw), 4.58rem)', '1'],
        '5xl': ['clamp(2.28rem, calc(0.94rem + 6.71vw), 5.72rem)', '1'],
        '6xl': ['clamp(2.57rem, calc(0.78rem + 8.95vw), 7.15rem)', '1'],
        '7xl': ['clamp(3rem, calc(0.78rem + 9vw), 7.4rem)', '1'],
      },
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
    },
  },
  plugins: [
    plugin(({ addUtilities, theme }) => {
      addUtilities({
        '.fade-up': {
          transition:
            'transform 1s cubic-bezier(0.64, 0.04, 0.26, 0.87), opacity 0.8s cubic-bezier(0.64, 0.04, 0.26, 0.87)',
          opacity: theme('opacity.0'),
          transform: 'translate3d(0, 2rem, 0)',
        },
        '.faded': {
          opacity: theme('opacity.100'),
          transform: 'translate3d(0, 0, 0)',
        },
      });
    }),
  ],
};
