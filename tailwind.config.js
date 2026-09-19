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
          50: '#f0fbfc',
          100: '#d9f5f7',
          200: '#b7eaee',
          300: '#85dae2',
          400: '#4cc2d0',
          500: '#00AEBD',
          600: '#0899a8',
          700: '#0f7b89',
          800: '#13636f',
          900: '#13525c',
          950: '#05363f',
        },
        accent: {
          50: '#fdf8f2',
          100: '#f5eeda',
          200: '#eadab4',
          300: '#dec188',
          400: '#d0a462',
          500: '#C9A96E',
          600: '#b8975a',
          700: '#997a48',
          800: '#7d643e',
          900: '#665235',
          950: '#372b1c',
        },
        charcoal: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
          950: '#2d2d2d',
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
