/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sofia Pro', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
        'sofia': ['Sofia Pro', 'sans-serif'],
      },
      colors: {
        // Brand Colors from Style Guide
        brand: {
          navy: '#0F263D',      // Primary brand navy
          orange: '#F78A44',    // Primary brand orange
          white: '#FFFFFF',     // Brand white
          grey: '#E6E6E6',      // Light grey (approx 10% black)
          black: '#000000',     // Brand black
        },
        // Semantic color mappings for ease of use
        primary: {
          DEFAULT: '#0F263D',   // Navy
          light: '#1A3A5C',     // Lighter navy
          dark: '#0A1A2A',      // Darker navy
        },
        secondary: {
          DEFAULT: '#F78A44',   // Orange
          light: '#FFA366',     // Lighter orange
          dark: '#E66F2E',      // Darker orange
        },
        neutral: {
          light: '#E6E6E6',     // Light grey
          DEFAULT: '#666666',   // Medium grey
          dark: '#333333',      // Dark grey
        },
        accent: '#F78A44',      // Using brand orange as accent
      },
    },
  },
  plugins: [],
}
