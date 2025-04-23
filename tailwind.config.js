/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'therapy-blue': '#153d64',
        'therapy-blue-dark': '#0f2b4a',
        'therapy-orange': '#F97316',
      },
    },
  },
  plugins: [],
} 