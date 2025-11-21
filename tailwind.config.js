/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'luckiest-guy': ['Luckiest Guy', 'sans-serif'],
        'landasans': ['Landasans Medium', 'sans-serif'],
      },
      translate: {
        '101': '101%',
      },
    },
  },
  plugins: [],
}