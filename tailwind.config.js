/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: '#111111',
        board: '#1e1e1a',
        card: '#2a2a2a',
        accent: '#f59e0b',
        muted: '#9ca3af',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        hand: ['Caveat', 'cursive'],
      }
    },
  },
  plugins: [],
}