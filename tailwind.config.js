/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          600: "#2563eb",
          500: "#3b82f6",
          400: "#60a5fa",
        },
        white: "#ffffff",
        gray: {
          950: "#030303",
          900: "#0a0a0a",
          800: "#0f0f0f",
          700: "#595652",
          600: "#a5a19b",
          500: "#6b7280",
          400: "#9ca3af",
          300: "#d1d5db",
          200: "#e5e7eb",
          100: "#f3f4f6",
        },
        yellow: {
          700: "#a16207",
          600: "#ca8a04",
          500: "#eab308",
          400: "#fbbf24",
          300: "#fde047",
        },
      },
    },
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: "1rem",

      // default breakpoints but with 40px removed
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "600px",
        "2xl": "600px",
      },
    },
  },
  plugins: [],
};
