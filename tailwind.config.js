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
          DEFAULT: '#10B981', // Emerald-500
          light: '#34D399',   // Emerald-400
          dark: '#065F46',    // Darker emerald for better contrast
        },
        // Secondary colors
        secondary: {
          DEFAULT: '#06B6D4', // Cyan-500
          light: '#22D3EE',   // Cyan-400
          dark: '#0891B2',    // Cyan-600
        },
        // Accent colors
        accent: {
          DEFAULT: '#A5F3FC', // Cyan-200
          light: '#ECFDF5',   // Emerald-50
          dark: '#67E8F9',    // Cyan-300
        },
        // Background colors
        background: {
          DEFAULT: '#F8FAFC', // Slate-50
          alt: '#F1F5F9',     // Slate-100
          dark: '#1E293B',    // Slate-800
        },
        // Text colors
        text: {
          DEFAULT: '#0F172A', // Slate-900
          light: '#F8FAFC',   // Slate-50
          muted: '#475569',   // Slate-600
        },
        // Utility colors
        error: '#EF4444',     // Red-500
        success: '#10B981',   // Emerald-500
        warning: '#F59E0B',   // Amber-500
        info: '#3B82F6',      // Blue-500
      },
      fontFamily: {
        cabinet: ['"Cabinet Grotesk"', 'system-ui', 'sans-serif'],
        familjen: ['"Familjen Grotesk"', 'monospace'],
        fraunces: ['Fraunces', 'Georgia', 'serif'],
        inter: ['Inter', 'system-ui', 'sans-serif']
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-in': 'slideIn 0.6s ease-out forwards'
      }
    },
  },
  plugins: [],
}