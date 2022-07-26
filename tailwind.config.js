/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
  theme: {
    extend: {},
    container: {
      center: true,
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
