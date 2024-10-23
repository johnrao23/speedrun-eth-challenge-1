/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  darkTheme: "dark",
  darkMode: ["selector", "[data-theme='dark']"],
  // DaisyUI theme colors
  daisyui: {
    themes: [
      {
        light: {
          primary: "#FFFFFF", // White
          "primary-content": "#000000", // Black
          secondary: "#E0E0E0", // Darker light gray
          "secondary-content": "#000000", // Black
          accent: "#000000", // Black
          "accent-content": "#FFFFFF", // White
          neutral: "#E0E0E0", // Darker light gray
          "neutral-content": "#000000", // Black
          "base-100": "#FFFFFF", // White
          "base-200": "#E0E0E0", // Darker light gray
          "base-300": "#C0C0C0", // Even darker light gray
          "base-content": "#000000", // Black
          info: "#000000", // Black
          success: "#000000", // Black
          warning: "#000000", // Black
          error: "#000000", // Black

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
      {
        dark: {
          primary: "#000000", // Black
          "primary-content": "#FFFFFF", // White
          secondary: "#1A1A1A", // Dark gray
          "secondary-content": "#FFFFFF", // White
          accent: "#FFFFFF", // White
          "accent-content": "#000000", // Black
          neutral: "#1A1A1A", // Dark gray
          "neutral-content": "#FFFFFF", // White
          "base-100": "#000000", // Black
          "base-200": "#1A1A1A", // Dark gray
          "base-300": "#333333", // Darker gray
          "base-content": "#FFFFFF", // White
          info: "#FFFFFF", // White
          success: "#FFFFFF", // White
          warning: "#FFFFFF", // White
          error: "#FFFFFF", // White

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
            "--tooltip-color": "oklch(var(--p))",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        "space-grotesk": ["Space Grotesk", "sans-serif"],
      },
      boxShadow: {
        center: "0 0 12px -2px rgb(0 0 0 / 0.05)",
      },
      animation: {
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
};
