module.exports = {
  purge: [
    "./src/**/*.vue",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.html",
    "./src/**/*.pug",
    "./src/**/*.md",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: "Lexend",
        serif: "PT Serif",
      },
    },
  },
  variants: {
    extend: {
      textDecorationPlugin: ["hover"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@downwindcss/text-decoration"),
  ],
};
