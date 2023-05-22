const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', "[data-theme='dark']"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-tt-commons)', ...fontFamily.sans],
        canela: ['var(--font-canela)', ...fontFamily.sans],
      },
      colors: {
        primary: '#13151e',
        white: '#fefefe',
        'white-ish': '#f8f7f6',
        teal: {
          primary: '#016d75',
        },
        yellow: {
          primary: '#e9d055',
        },
        blue: {
          primary: '#273748',
        },
        brass: '#c88469',
        'old-paper': '#E0C9A6',
      },
      keyframes: {
        'slide-up': {
          '0%, 50%': { top: '6px', opacity: 0 },
          '100%': { top: '0', opacity: 1 },
        },
        'fade-in': {
          '0%, 50%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        'slide-up': 'slide-up 1.5s',
        'fade-in': 'fade-in 1s',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};
