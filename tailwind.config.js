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
        page: "rgb(var(--color-fb-white))",
        fb: {
          DEFAULT: "rgb(var(--color-fb-light))",
          light: "rgb(var(--color-fb-light))",
          gray: "rgb(var(--color-fb-gray))",
          green: "rgb(var(--color-fb-green))",
          white: "rgb(var(--color-fb-white))",
        },
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

