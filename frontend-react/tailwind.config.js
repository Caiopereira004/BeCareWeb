/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        glowPrimary: '#D9777F',
        glowDark: '#9E4B53',
        glowNude: '#F8E8EE',
        glowBg: '#FAF4F5',
        glowCyan: '#06B6D4'
      }
    },
  },
  plugins: [],
}
