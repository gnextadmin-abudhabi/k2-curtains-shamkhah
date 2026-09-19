/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'DM Serif Display'", 'Georgia', 'serif'],
        body: ["'DM Sans'", "'Helvetica Neue'", 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f5f7f6',
          100: '#e3eae7',
          200: '#c7d5cf',
          300: '#a3b9b0',
          400: '#7a9a8e',
          500: '#5c7f72',
          600: '#466558',
          700: '#395248',
          800: '#30433c',
          900: '#2a3833',
          950: '#151f1c',
        },
        accent: {
          50: '#fbf8f2',
          100: '#f5eeda',
          200: '#eadab4',
          300: '#dec188',
          400: '#d0a462',
          500: '#c5914a',
          600: '#b87a3d',
          700: '#996133',
          800: '#7d4f30',
          900: '#66422a',
          950: '#372115',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out both',
        'fade-in': 'fadeIn 0.5s ease-out both',
        'slide-down': 'slideDown 0.4s ease-out both',
        'scale-in': 'scaleIn 0.3s ease-out both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
