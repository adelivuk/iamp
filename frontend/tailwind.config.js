/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#005EB8',
        'yellow': '#FFCD2D',
      },
      backgroundImage: {
        'main': "url('/src/assets/background.png')",
      },
    }
  },
}
