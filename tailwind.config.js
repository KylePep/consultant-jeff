import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
      },
      fontFamily: {
        sans: ['Funnel Sans', ...defaultTheme.fontFamily.sans],
        serif: ['Tinos', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [
  ],

}