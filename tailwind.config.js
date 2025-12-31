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
          DEFAULT: '#0066CC',
          dark: '#004A99',
        },
        secondary: {
          DEFAULT: '#FF6B35',
          light: '#FF8C42',
        },
        neutral: {
          light: '#F5F5F5',
          dark: '#333333',
        },
        accent: '#E3F2FD',
      },
    },
  },
  plugins: [],
}
