/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#006B3E', // Rich Green from UI
          dark: '#004D2C',
          light: '#E6F4ED',
          hover: '#005632'
        },
        sidebar: '#0B2217',
        accent: '#00875A'
      }
    },
  },
  plugins: [],
}
