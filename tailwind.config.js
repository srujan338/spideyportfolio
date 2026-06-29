/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        spidey: {
          red: '#E23636',
          blue: '#2B3E93',
          darkBlue: '#1a2a6c',
          black: '#000000',
        }
      },
      fontFamily: {
        marvel: ['"Bangers"', 'cursive'],
        body: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'city-skyline': "url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
      }
    },
  },
  plugins: [],
}
