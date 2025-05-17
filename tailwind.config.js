/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        anton: ["Anton", "sans-serif"],
      },
      screens : {
        'ml' : '1330px',
        'mxl' : '1410px',
        'm2xl' : '1500px'
      }
    },
  },
  plugins: [],
}

