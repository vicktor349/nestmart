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
        "primaryText": "#253D4E",
        "borderColor": "#ECECEC",
        "secondaryText": "#7E7E7E"
      },
      screens: {
        "ssm": "360px",
        "sssms": "384px",
        "ssms": "480px",
        iiixl: "1792px"
      },
      gridTemplateColumns: {
        "200": "repeat(auto-fit, minmax(170px, 1fr))",
        "100": "repeat(auto-fit, minmax(250px, 1fr))",
        "50": "repeat(auto-fit, minmax(190px, 1fr))",
        "providexl": "repeat(auto-fit, minmax(350px, 1fr))",
        "providessm": "repeat(auto-fit, minmax(300px, 1fr))",
        "footer": "repeat(auto-fit, minmax(260px, 1fr))"
      },
      fontFamily: {
        "Montserrat": "Montserrat",
      }
    },
  },
  plugins: [],
};
