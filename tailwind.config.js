/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary_DeepBlue: "#0D345D",
        primary_SkyBlue: '#1D70C9'
      },
    },
  },
  plugins: [],
};
