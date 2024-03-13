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
        "200": "repeat(auto-fit, minmax(180px, 1fr))",
        "100": "repeat(auto-fit, minmax(294px, 1fr))",
        "footer": "repeat(auto-fit, minmax(260px, 1fr))"
      }
    },
  },
  plugins: [],
};
