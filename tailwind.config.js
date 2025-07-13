/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f97316",
      },

      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },

      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        handwriting: ["Merienda", "cursive"],
        inter: ["Inter"],
      },

      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
