/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        900: 'var(--900)',
        100: 'var(--100)',
        accenLight: 'var(--accent-light)',
        400: 'var(--400)',
        700: 'var(--700)',
        600: 'var(--600)',
        300: 'var(--300)',
        800: 'var(--800)',
        accent: 'var(--accent)',
        accentMedium: 'var(--accent-medium)',
      },
      fontFamily: {
        switzer: ['Switzer', 'sans-serif'],
      },
      fontWeight: {
        100: 100,
        200: 200,
        300: 300,
        400: 400,
        500: 500,
        600: 600,
        700: 700,
        800: 800,
        900: 900,
      }
    },
  },
  plugins: [],
}

