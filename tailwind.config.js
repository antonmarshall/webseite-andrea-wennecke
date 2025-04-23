/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'therapy-blue': '#3B82F6', // Wärmerer Blauton
        'therapy-blue-dark': '#2563EB',
        'therapy-orange': '#F97316',
      },
    },
  },
  plugins: [],
} 