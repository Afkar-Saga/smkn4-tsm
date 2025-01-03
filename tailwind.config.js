/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#20679E',
        },
        'secondary': {
          'light': '#A1C398',
          DEFAULT: '#629256',
        },
        'orange': '#FFAA40'
      }
    },
  },
  plugins: [
    daisyui,
  ],
}

