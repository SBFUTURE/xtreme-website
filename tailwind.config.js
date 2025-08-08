/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'xtreme-black': '#000000',
        'xtreme-yellow': '#FFED4E',
        'xtreme-dark': '#1a1a1a',
        'xtreme-light-yellow': '#FFF59D',
        'ice-blue': '#E3F2FD',
        'frost-white': '#FAFAFA',
      },
      fontFamily: {
        'heading': ['Oswald', 'sans-serif'],
        'body': ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'ice-gradient': 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)',
        'yellow-gradient': 'linear-gradient(135deg, #FFED4E 0%, #FFF59D 100%)',
      },
      boxShadow: {
        'ice': '0 4px 20px rgba(255, 237, 78, 0.3)',
        'frost': '0 8px 32px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}
