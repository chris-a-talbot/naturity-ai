/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors - Using emerald tones from the navbar
        primary: {
          DEFAULT: '#10B981', // Emerald-500
          light: '#34D399',   // Emerald-400
          dark: '#065F46',    // Darker emerald for better contrast
        },
        // Secondary colors - Using cyan tones from the navbar
        secondary: {
          DEFAULT: '#06B6D4', // Cyan-500
          light: '#22D3EE',   // Cyan-400
          dark: '#0891B2',    // Cyan-600
        },
        // Accent colors - Lighter variations for contrast
        accent: {
          DEFAULT: '#A5F3FC', // Cyan-200
          light: '#ECFDF5',   // Emerald-50 for better contrast on dark backgrounds
          dark: '#67E8F9',    // Cyan-300
        },
        // Background colors - Using slate with higher contrast
        background: {
          DEFAULT: '#F8FAFC', // Slate-50
          alt: '#F1F5F9',     // Slate-100
          dark: '#1E293B',    // Slate-800 for dark sections
        },
        // Text colors - Ensuring readability
        text: {
          DEFAULT: '#0F172A', // Slate-900
          light: '#F8FAFC',   // Slate-50 for dark backgrounds
          muted: '#475569',   // Slate-600 for better contrast
        },
        // Utility colors - Maintained but adjusted for consistency
        error: '#EF4444',     // Red-500
        success: '#10B981',   // Emerald-500
        warning: '#F59E0B',   // Amber-500
        info: '#3B82F6',      // Blue-500
      },
    },
  },
  plugins: [],
}