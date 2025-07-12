module.exports = {
  darkMode: 'class', // enable class-based dark mode toggling
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#064e3b', // dark green shade
          DEFAULT: '#065f46', // main dark green
          dark: '#064e3b',   // darker green for hover etc
        },
        backgroundLight: '#ffffff',
        backgroundDark: '#000000',
      },
    },
  },
  plugins: [],
}
