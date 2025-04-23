/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'therapy-blue': '#1E40AF', // Dunkleres Blau
        'therapy-blue-dark': '#1E3A8A',
        'therapy-orange': '#F97316',
      },
    },
  },
  plugins: [],
} 