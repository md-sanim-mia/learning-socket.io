/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'], // This will set Roboto as the default sans font
      // You can add other font groups if you like
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

