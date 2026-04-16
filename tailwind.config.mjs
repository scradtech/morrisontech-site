/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,md,mdx}'],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#0a1628',
        'brand-mid': '#1a3a6b',
        'brand-accent': '#2d6cdf',
        'brand-light': '#f0f4ff',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
