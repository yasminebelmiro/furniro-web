/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {    extend: {
      fontFamily: {
        'poppins': 'var(--font-poppins)',
      },
      colors: {
        'primary': '#B88E2F',
        'secondary': '#FFF3E3',
      },
      maxWidth: {
        '7xl': '80rem',
      },
      spacing: {
        '25': '6.25rem',
      },
      screens: {
        'xs': '360px',
        // sm: 640px (default)
        // md: 768px (default)
        // lg: 1024px (default)
        // xl: 1280px (default)
        // 2xl: 1536px (default)
      }
    },
  },
  plugins: [],
}