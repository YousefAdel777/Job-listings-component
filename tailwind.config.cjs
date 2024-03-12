/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js,jsx}", "./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      "md": "768px", 
      "lg": "992px", 
      "xl": "1200px", 
      "2xl": "1400px", 
    },
    colors: {
      "white": "#fff",
      "black": "#000",
      "cyan-200": "hsl(180, 31%, 95%)",
      "cyan-300": "hsl(180, 52%, 96%)",
      "cyan-400": "hsl(180, 29%, 50%)",
      "cyan-600" : "hsl(180, 8%, 52%)",
      "cyan-800": "hsl(180, 14%, 20%)",
    },
    fontFamily: {
      "league": ["League Spartan", "sans-serif"],
    },
    extend: {
      fontSize: {
        "normal": "0.9375rem",
        "2xl": "1.375rem",
      },
    },
  },
  plugins: [],
}
