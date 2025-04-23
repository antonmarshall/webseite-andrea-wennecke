/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'therapy-blue': '#1E40AF',
        'therapy-blue-dark': '#1E3A8A',
        'therapy-warm': '#F5E6D3',
        'therapy-warm-light': '#F8EDE3',
        'therapy-warm-lighter': '#FAF4F0',
        'therapy-warm-dark': '#E8D5C4',
        'therapy-sand': '#E6D5B8',
        'therapy-sand-light': '#EDE0C8',
        'therapy-sand-dark': '#D8C7A8',
        'therapy-cream': '#F9F5F0',
        'therapy-cream-light': '#FDFAF7',
        'therapy-cream-dark': '#F5EFE8',
        // Service card colors
        'moss-green': '#8B9A7D',
        'terracotta': '#D4A373',
        'sage-green': '#A8B8A8',
        'sand': '#E6D5B8',
        'warm-gray': '#A8A8A8',
        'cool-gray': '#8B8B8B',
      },
      backgroundImage: {
        'sand-texture': "url('/webseite-andrea-wennecke/images/sand-texture.svg')",
      },
    },
  },
  plugins: [],
} 