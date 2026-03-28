/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A304F",
        accent: "#9B1C27",
        textWhite: "#F8F6F6",
        borderLight: "#F3F4F6",
        lightBlueBg: "#F8FAFC",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      keyframes: {
        slowZoom: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
      },
      animation: {
        slowZoom: "slowZoom 10s ease-in-out infinite",
      },
    },
  },
}