const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
        petitFormal: ["Petit Formal Script"],
        russonOne: ["Russon One"],
      },
      colors: {
        royalBlue: "#4169e1",
        darkBlue: "#0d1117",
        dark: "#0d1117",
      },
    },
    backgroundImage: {
      wrapperBg: "url('assets/images/wrapperBackground.svg')",
      wrapperDark: "url('assets/images/wrapperDark.svg')",
    },
    container: {
      screens: {
        sm: "640px",
        md: "767px",
        lg: "1140px",
        xl: "1400px",
        "2xl": "1800px",
      },
    },
  },
  plugins: [],
});
