/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        'steelBlue': '#4682b4',
        'silver': '#b0b0b0',
        'paperWhite': '#f8f8ff',
        'white': '#ffffff',
    }
  },
},
  plugins: [require("flowbite/plugin")],
}

