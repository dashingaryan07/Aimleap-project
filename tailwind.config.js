/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4B1DB1', // Purple
        secondary: '#FF6400', // Orange
        lightGray: '#F3F3F3',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};