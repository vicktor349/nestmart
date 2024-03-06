/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#3BB77E",
        "primaryText": "#253D4E"
      },
      screens: {
        "ssm": "360px"
      },
      gridTemplateColumns: {
        "200": "repeat(auto-fit, minmax(200px, 1fr))"
      }
    },
  },
  plugins: [],
};
