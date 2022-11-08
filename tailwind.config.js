/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tungsten: "Tungsten-Bold, sans",
      },
      colors: {
        "valorant-bg": "#12151A",
        white: "#ece8e1",
        red: "#ff4655",
      },
    },
  },
  plugins: [],
};
