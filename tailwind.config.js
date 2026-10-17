/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sohan: {
          cream: '#F2EADC',
          cocoa: '#2B211A',
          pistachio: '#7D8F5C',
          sugar: '#A8622C',
          card: '#FAF7F2',
          dark: '#1D1611',
          muted: '#8C7D73',
          border: '#E3D7C5',
        }
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['Karla', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
