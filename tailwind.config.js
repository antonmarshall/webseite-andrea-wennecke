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
        'card-warm': '#F8F4F0',
        // Service card colors
        'moss-green': '#8B9A7D',
        'curry-yellow': '#C78C4A',
        'soft-blue': '#6F8FBF',
        'warm-purple': '#A06A6A',
        'coral-pink': '#E68C8C',
        'sage-green': '#96A896',
      },
      backgroundImage: {
        'linen': "url('/images/linen-texture.svg')",
        'sand': "url('/images/sand-texture.svg')",
      },
    },
  },
  plugins: [],
} 