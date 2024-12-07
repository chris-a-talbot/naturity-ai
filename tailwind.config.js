/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        primary: {
          DEFAULT: '#2D6A4F', // Main brand color
          light: '#40916C',   // Lighter variation
          dark: '#1B4332',    // Darker variation
        },
        // Secondary colors
        secondary: {
          DEFAULT: '#40916C',
          light: '#74C69D',
          dark: '#2D6A4F',
        },
        // Accent colors
        accent: {
          DEFAULT: '#95D5B2',
          light: '#B7E4C7',
          dark: '#74C69D',
        },
        // Background colors
        background: {
          DEFAULT: '#F8FAF9',
          alt: '#E9F1EE',
        },
        // Text colors
        text: {
          DEFAULT: '#1B4332',
          light: '#2D6A4F',
          muted: '#6B7280',
        },
        // Utility colors
        error: '#BC4749',
        success: '#2D6A4F',
        warning: '#F9C74F',
        info: '#4F7CAC',
      },
    },
  },
  plugins: [],
}