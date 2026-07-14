/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        body: "1600px",
        container: "1440px",
      },
      screens: {
        xs: "280px",
        sm: "375px",
        sml: "511px",
        smlx: "546px",
        md: "667px",
        mdlx: "710px",
        mdl: "830px",
        lg: "960px",
        lgl: "1061px",
        lglx: "1100px",
        xl: "1280px",
        mx: "1420px",
      },
      fontFamily: {
        titleFont: ["Poppins", "sans-serif"],
        bodyFont: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
