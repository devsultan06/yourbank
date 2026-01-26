/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lexend", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        primary: "#CAFF33",
        "primary-hover": "#d1ff46",
        background: "#191919",
        surface: "#1C1C1C",
        "surface-light": "#262626",
        border: "#262626",
        "text-primary": "#FFFFFF",
        "text-secondary": "#B3B3B3",
        "text-muted": "#666666",
      },
      borderRadius: {
        "4xl": "32px",
      },
    },
  },
  plugins: [],
};

module.exports = config;
