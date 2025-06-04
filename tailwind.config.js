/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'primary': '#B88E2F',
        'secondary': '#FFF3E3',
      },
      maxWidth: {
        '7xl': '80rem',
      }
    },
  },
  plugins: [],
}