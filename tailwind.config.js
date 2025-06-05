/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4CAF50',
          dark: '#3B8A3F',
          light: '#81C784',
        },
        accent: '#FF6B6B',
        background: '#F9FAFB',
        text: '#1F2937',
        success: '#4CAF50',
        warning: '#FFA726',
        error: '#EF5350',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};