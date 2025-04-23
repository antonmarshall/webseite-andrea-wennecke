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
        'therapy-beige': '#E6D0B8',
        'card-warm': '#F5E6D3',
        // Service card colors
        'moss-green': '#8B9A7D',
        'curry-yellow': '#D4A373',
        'soft-blue': '#6B8EAF',
        'warm-purple': '#9B7C7C',
        'coral-pink': '#E6A4A4',
        'sage-green': '#A8B8A8',
      },
      backgroundImage: {
        'linen': "url('/images/linen-texture.svg')",
        'sand': "url('/images/sand-texture.svg')",
      },
    },
  },
  plugins: [],
} 