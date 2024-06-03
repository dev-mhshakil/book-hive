/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fcba03",
        secondary: "#023047",
        accent: "#FFFFFF",
        light: "#FAF3E0",
        highlight: "#F4A261",
      },
    },
    variants: {
      backgroundColor: ["responsive", "hover", "active", "focus"],
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui"), require("flowbite/plugin")],
};
