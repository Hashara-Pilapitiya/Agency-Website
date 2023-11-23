/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        'navyBlue': '#00183f',
        'silver': '#b0b0b0',
        'lightSilver': '#dcdcdc', 
        'naturalGrey': '#717171',
        'white': '#ffffff',
    }
  },
},
  plugins: [],
}

