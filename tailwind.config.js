/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        nunito: ['Nunito', 'sans-serif'], 
      },
      colors: {
        primary: "#67568c",
        secondary: "#cc6677",
        text: "#1e293b"
      }
    }
  },
  plugins: []
};
