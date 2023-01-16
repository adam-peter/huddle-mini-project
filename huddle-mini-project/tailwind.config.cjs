/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        headings: ["Poppins", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
      colors: {
        "huddle-violet": "hsl(257, 40%, 49%)",
        "huddle-magenta": "hsl(300, 69%, 71%)",
      },
      backgroundImage: {
        desktop: "url('/images/bg-desktop.svg')",
        mobile: "url('/images/bg-mobile.svg')",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
