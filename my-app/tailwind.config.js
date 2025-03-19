/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        yeseva: ['Yeseva One', 'cursive'], // Keep your existing font
        aeonik: ['Aeonik', 'sans-serif'],  // Add Aeonik
      },
    },
  },
  plugins: [],
};

