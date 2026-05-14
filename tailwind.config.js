/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Outfit"', '"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#eff8ff',
          100: '#dbefff',
          200: '#b8e2ff',
          300: '#7fd1ff',
          400: '#33b9ff',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        ink: '#0f172a',
        surface: '#f6f7fb',
        muted: '#64748b',
      },
      borderRadius: {
        xl: '1rem',
      },
      boxShadow: {
        soft: '0 18px 45px -30px rgba(15, 23, 42, 0.45)',
      },
    },
  },
  plugins: [],
}
