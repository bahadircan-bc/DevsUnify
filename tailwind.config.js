/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,css,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#323232',
        'secondary-dark': '#404040',
        'primary-accent': '#F1808E',
        'secondary-accent': '#928EF3',
      },
      fontFamily: {
        'k2d': ['K2D'],
        'jetmono': ['JetBrains Mono'],
      }
    },
  },
  plugins: [],
}

