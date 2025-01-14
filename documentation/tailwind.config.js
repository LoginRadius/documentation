/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "className", // Enables dark mode support using the 'className' strategy

  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: ["className", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#ffff", // Light theme primary color
          dark: "#36454F", // Dark theme primary color
        },

        secondary: {
          light: "##0b8bc4",
          dark: "#fff",
        },
      },

      borderRadius: {
        button: "12px", // Custom border-radius for buttons
      },
    },
  },

  plugins: [],
};
